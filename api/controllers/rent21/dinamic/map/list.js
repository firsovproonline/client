let sql = `SELECT rent21_buildings.address AS address,
    rent21_buildings.fields as fields,
    rent21_obs.fields as ob21,
    json_extract_path(rent21_obs.fields,'TIP') as typeOb21,
    rent21_buildings.uid AS build_uid,
    json_extract_path(rent21_buildings.fields,'NAME') as name,
    json_extract_path(rent21_addresses.fields,'LAT') as lat,
    json_extract_path(rent21_addresses.fields,'LNG') as lng,
 rent21_buildings.uid
 FROM rent21_buildings
 LEFT JOIN rent21_addresses ON rent21_addresses.uid = rent21_buildings.address
 LEFT JOIN rent21_obs ON rent21_obs.build = rent21_buildings.uid
 `

if(req.body && req.body.tipReal === 'suburban'){
  sql += ` WHERE rent21_obs.fields ->> 'TIP' in ('Дом/дача','Коттедж','Танхаус','Часть дома')`
}
if(req.body && req.body.tipReal === 'residential'){
  sql += ` WHERE rent21_obs.fields ->> 'TIP' in ('Квартира','Квартира новостройка','Комната','Доля в квартире')`
}
res.db.sequelizePg.query(sql, {
  raw: true
}).then((items) => {
  const outOb = {}
  const outAr = []
  items[0].forEach(item=>{
    if(!outOb[item.build_uid]){
      outOb[item.build_uid] =  {
        countOb:{
          'Офис': 0,
          'Магазин': 0,
          'Склад': 0,
          'Помещение свободного назначения': 0,
          'Здание':0,
        }
      }
      outAr.push(item)
    }
    if(item.ob21) {
      outOb[item.build_uid].countOb[item.ob21.TIP] ++
      // outOb[item.build_uid].countOb.total ++
    }
  })
  res.json({rows : outAr,temp:outOb})
})
