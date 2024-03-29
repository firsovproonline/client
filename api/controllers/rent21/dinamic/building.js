if(req.user && (req.user.isAdmin || req.user.isRieltor) && req.user.DOSTUP.indexOf('Поиск')> -1){
  const e = req.originalUrl.split('/');
  const id = e[e.length - 1]
  const outOb ={}
  let sql =`SELECT *
    FROM rent21_buildings
    WHERE rent21_buildings.uid='`+id+`'`
  res.db.sequelizePg.query(sql, {
    raw: true
  }).then((items) => {
    outOb.building = items[0][0].fields
    outOb.owners = items[0][0].owners
    sql =`SELECT *
    FROM rent21_addresses
    WHERE rent21_addresses.uid='`+items[0][0].address+`'`
    res.db.sequelizePg.query(sql, {
      raw: true
    }).then((items) => {
      outOb.address = items[0][0].fields
      sql =`SELECT rent21_obs.fields,
      rent21_obs.exports as exports,
      rent21_owners.fields as owner,
      rent21_owners.contacts as contacts
      FROM rent21_obs
          LEFT JOIN rent21_owners ON rent21_owners.uid = rent21_obs.owner

      WHERE rent21_obs.build='`+outOb.building.UID+`'`
      res.db.sequelizePg.query(sql, {
        raw: true
      }).then((items) => {
        outOb.ob21 = []
        const uids = []
        items[0].forEach(item=>{
          item.fields.exports = item.exports
          if(uids.indexOf(item.fields.UID)===-1){
            uids.push(item.fields.UID)
          }
          outOb.ob21.push(item.fields)
        })
if(!outOb.owners) outOb.owners = []
        sql =`SELECT *
          FROM rent21_owners
          WHERE rent21_owners.uid in ('` + outOb.owners.join("','") + `')`
        res.db.sequelizePg.query(sql, {
          raw: true
        }).then(items=>{
          outOb.owners = []
          items[0].forEach(item=>{
            item.fields.contacts = item.contacts
            outOb.owners.push(item.fields)
          })
          res.json({row : outOb})

        })





        // outOb.owners = {}

        /*
        sql = "select * from rent21_exports where uid in ('" + uids.join("','") + "')"
        res.db.sequelizePg.query(sql, {
          raw: true
        }).then(items=>{
          outOb.export = items[0]
          res.json({row : outOb})
        })
         */
      })
    })
  })
}else{
  res.json({error : 401})
}

