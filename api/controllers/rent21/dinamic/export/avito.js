const startDate = new Date().getTime();
const ejs = require('ejs');
let where = ` WHERE (
 rent21_exports.fields -> 'avito' ->> 'Publ' =  '1'
 )
`
//OR rent21_exports.fields -> 'cian1' ->> 'Publ' =  '1'
//OR rent21_exports.fields -> 'avito' ->> 'Publ' =  '1'
//AND rent21_obs.fields ->> 'TIP' <> 'Офис'
const sqlCount = `SELECT COUNT(rent21_exports.id) as  count
    FROM rent21_exports
    LEFT JOIN rent21_obs ON rent21_obs.uid = rent21_exports.uid
    LEFT JOIN rent21_buildings ON rent21_buildings.uid = rent21_obs.build
    LEFT JOIN rent21_addresses ON rent21_addresses.uid = rent21_buildings.address
    ` + where
const sql = `SELECT rent21_exports.uid, rent21_obs.fields ->'TIP' as tip,
rent21_exports.fields,
rent21_exports.fields->'cian'->'Publ' as cianPubl,
rent21_exports.fields->'cian1'->'Publ' as cian1Publ,
rent21_exports.fields->'avito'->'Publ' as avitoPubl,
rent21_obs.fields as ob,
    rent21_buildings.fields as building,
    rent21_addresses.fields as address
    FROM rent21_exports
LEFT JOIN rent21_obs ON rent21_obs.uid = rent21_exports.uid
    LEFT JOIN rent21_buildings ON rent21_buildings.uid = rent21_obs.build
    LEFT JOIN rent21_addresses ON rent21_addresses.uid = rent21_buildings.address
    ` + where + ` OFFSET 0 LIMIT 5000`
console.error(sql)
db.sequelizePg.query(sqlCount, {
  raw: true
}).then((items) => {
  const count = items[0][0].count
  db.sequelizePg.query(sql, {
    raw: true
  }).then((items) => {
    ejs.renderFile(__dirname + '/dinamic/export/template.ejs', {
      ob: items[0]
    }, {}, function(err, str) {
      //res.end(str)
      res.json({count:count, xml: str,rows : items[0],time:(new Date().getTime() - startDate)/1000})
    });
    // res.json({count:count, rows : items[0],sql:sql, body:(new Date().getTime() - startDate)/1000})
  })

})
