if(req.user && (req.user.isAdmin || req.user.isRieltor) && req.user.DOSTUP.indexOf('Поиск')> -1){
  const e = req.originalUrl.split('/');
  const id = e[e.length - 1]
  const sql =`SELECT rent21_obs.*,
    rent21_buildings.fields as building,
    rent21_addresses.fields as address
    FROM rent21_obs
    LEFT JOIN rent21_buildings ON rent21_buildings.uid = rent21_obs.build
    LEFT JOIN rent21_addresses ON rent21_addresses.uid = rent21_buildings.address
    WHERE rent21_obs.uid='`+id+`'`
  db.sequelizePg.query(sql, {
    raw: true
  }).then((items) => {
    res.json({row : items[0]})
  })
}else{
  res.json({error : 401})
}

