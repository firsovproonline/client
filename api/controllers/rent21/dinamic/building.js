if(req.user && (req.user.isAdmin || req.user.isRieltor) && req.user.DOSTUP.indexOf('Поиск')> -1){
  const e = req.originalUrl.split('/');
  const id = e[e.length - 1]
  const outOb ={}
  let sql =`SELECT *
    FROM rent21_buildings
    WHERE rent21_buildings.uid='`+id+`'`
  db.sequelizePg.query(sql, {
    raw: true
  }).then((items) => {
    outOb.building = items[0][0].fields
    sql =`SELECT *
    FROM rent21_addresses
    WHERE rent21_addresses.uid='`+items[0][0].address+`'`
    db.sequelizePg.query(sql, {
      raw: true
    }).then((items) => {
      outOb.address = items[0][0].fields
      sql =`SELECT rent21_obs.fields,
      rent21_owners.fields as owner,
      rent21_owners.contacts as contacts
      FROM rent21_obs
          LEFT JOIN rent21_owners ON rent21_owners.uid = rent21_obs.owner

      WHERE rent21_obs.build='`+outOb.building.UID+`'`
      db.sequelizePg.query(sql, {
        raw: true
      }).then((items) => {
        outOb.ob21 = []
        items[0].forEach(item=>{
          item.owner.contacts = item.contacts
          item.fields.owner = item.owner
          outOb.ob21.push(item.fields)
        })
        res.json({row : outOb})
      })
    })
  })
}else{
  console.error(req.user)
  res.json({error : 401})
}

