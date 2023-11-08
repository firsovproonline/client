if(req.user && (req.user.isAdmin || req.user.isRieltor) && req.user.DOSTUP.indexOf('Поиск')> -1) {
const e = req.originalUrl.split('/');
const category = e[e.length - 1]
let where = " WHERE rent21_obs.category = '"+category+"' "
let order =''
req.body.offset = 0
req.body.limit = 15
if(req.body.METRO && req.body.METRO !=''){
  req.body.METRO = " in ('\""+req.body.METRO.replace(/\|/g,"\"','\"")+"\"')"
  where = where + " AND ("+
    "json_extract_path(json_extract_path(json_extract_path(rent21_addresses.fields,'METRO'),'0'),'NAME')::text " +
    req.body.METRO
    +
    " OR json_extract_path(json_extract_path(json_extract_path(rent21_addresses.fields,'METRO'),'1'),'NAME')::text " +
    req.body.METRO
    +
    " OR json_extract_path(json_extract_path(json_extract_path(rent21_addresses.fields,'METRO'),'2'),'NAME')::text " +
    req.body.METRO

    +")"
}
const sql =`SELECT rent21_obs.*,
    rent21_buildings.fields as building,
    rent21_addresses.fields as address
    FROM rent21_obs
    LEFT JOIN rent21_buildings ON rent21_buildings.uid = rent21_obs.build
    LEFT JOIN rent21_addresses ON rent21_addresses.uid = rent21_buildings.address
 `+where+order+` OFFSET `+req.body.offset+` LIMIT `+req.body.limit

let sqlCount = `SELECT COUNT(rent21_obs.id) as  count
    FROM rent21_obs
    LEFT JOIN rent21_buildings ON rent21_buildings.uid = rent21_obs.build
    LEFT JOIN rent21_addresses ON rent21_addresses.uid = rent21_buildings.address
`+where

res.db.sequelizePg.query(sqlCount, {
  raw: true
}).then((items) => {
  const count = items[0][0].count
  res.sequelizePg.query(sql, {
    raw: true
  }).then((items) => {
    res.json({count:count, rows : items[0],sql:sql, body:req.body})
  })

})
}else{
  res.json({error : 401})
}
