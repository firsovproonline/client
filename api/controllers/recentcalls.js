const db = require("../models");
const fs = require('fs')

exports.listCall = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/rent21/dinamic/recentcalls/listCall.js', "utf8");
  eval(fileContent);

}


exports.list = (req, res) => {
  if(!req.user || (!req.user.isAdmin && !req.user.isRieltor)){
    res.json({'error':401})
    return
  }
  let where = '';
  if(req.body){
    for (const key in req.body) {
      if (key && req.body.hasOwnProperty(key) !== 'undefined') {
        if(req.body[key] !==''){
          switch (key) {
            case 'id':
              if(where!==''){
                where += ' AND '
              }
              where += " callzvons.id = " +req.body[key]
              break
            default:
              break
          }

        }
      }
    }
    if(where != ''){
      where = ' WHERE '+ where
    }
  }
  db.sequelizePg.query(`SELECT COUNT(id) as  count FROM callzvons `+where, {
    raw: true
  }).then((items) => {
    const count = items[0][0].count
      db.sequelizePg.query(`SELECT callzvons.client_number, callzvons.client_name, callzvons.id, callzvons.start_time, callzvons.user_id, users.title,
            impressions.title as impression, impressions.id as impression_id
            FROM callzvons
                LEFT JOIN users ON users.email = callzvons.user_account
                LEFT JOIN impressions ON callzvons.client_number = substring(json_extract_path(json_extract_path(json_extract_path(impressions.fields,'TEL'),'0'),'val')::text,2,12)
                `+where+`
                ORDER BY  callzvons.start_time DESC
                OFFSET `+req.body.offset+` LIMIT `+req.body.limit, {
      raw: true
    }).then((items) => {
      res.json({count:count, rows : items[0]})
    })
  })
}
