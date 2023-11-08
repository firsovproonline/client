if(req.user && (req.user.isAdmin || req.user.isRieltor) && req.user.DOSTUP.indexOf('Поиск')> -1){
  //house
  let sql = `select * from rent21_addresses WHERE rent21_addresses.fields ->> 'ULITCA' = '`+ req.body.street+`' `
  sql += ` AND rent21_addresses.fields ->> 'DOM' = '`+ req.body.house+`' `
  res.db.sequelizePg.query(sql, {
    raw: true
  }).then(rows=>{
    res.json({row : rows})

  })

}else
  res.json({error : 401})
