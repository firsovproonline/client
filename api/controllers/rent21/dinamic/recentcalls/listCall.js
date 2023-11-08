if(req.user && (req.user.isAdmin || req.user.isRieltor) && req.user.DOSTUP.indexOf('Поиск')> -1){

  let where = '';
if(!req.body.offset)req.body.offset = 0
if(!req.body.limit)req.body.limit = 50
if(req.body){
  for (const key in req.body) {
    if (req.body.hasOwnProperty(key)) {
      if(req.body[key] !==''){
        switch (key) {
          case 'id':
            if(where!==''){
              where += ' AND '
            }
            where += " callzvons.id = " +req.body[key]
            break
          case 'phone':
            if(where!==''){
              where += ' AND '
            }
            where += " callzvons.client_number in ("
            const listPhone = []
            req.body[key].forEach(phone=>{
              listPhone.push('\''+phone.val.replace(/\(/g,'').replace(/\-/g,'').replace(/\)/g,'').replace(' ','')+'\'')
            })
            where += listPhone.join(',')
            where += ')'
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


console.error('where',where)



res.db.sequelizePg.query(`SELECT COUNT(id) as  count FROM callzvons `+where, {
  raw: true
}).then((items) => {
  const count = items[0][0].count
  let sql = `SELECT callzvons.client_number, callzvons.client_name, callzvons.id, callzvons.start_time, callzvons.user_id,
            callzvons.user_account,
             users.title as userTitle,
             impressions.title as impression, impressions.id as impression_uid,
            regexp_replace(regexp_replace(callzvons.client_number, '\\D', '', 'g'), '(\\d{1})(\\d{3})(\\d{3})(\\d{2})(\\d{2})', '(\\2) \\3-\\4-\\5') as phone
            FROM callzvons
            LEFT JOIN users ON users.email = callzvons.user_account
            LEFT JOIN impressions ON callzvons.client_number = substring(json_extract_path(json_extract_path(json_extract_path(impressions.fields,'TEL'),'0'),'val')::text,2,12)

            `+where+` ORDER BY  callzvons.start_time DESC
                OFFSET `+req.body.offset+` LIMIT `+req.body.limit
/*
             rent21_owners.contacts,

LEFT JOIN rent21_owners ON rent21_owners.contacts::text LIKE concat_ws('%',regexp_replace(regexp_replace(callzvons.client_number, '\\D', '', 'g'), '(\\d{1})(\\d{3})(\\d{3})(\\d{2})(\\d{2})', '(\\2) \\3-\\4-\\5'),'%')


  sql = `SELECT callzvons.client_number, callzvons.client_name, callzvons.id, callzvons.start_time, callzvons.user_id, users.title as userTitle,
            callzvons.user_account,
            regexp_replace(regexp_replace(callzvons.client_number, '\\D', '', 'g'), '(\\d{1})(\\d{3})(\\d{3})(\\d{2})(\\d{2})', '(\\2) \\3-\\4-\\5') as phone,
            impressions.title as impression, impressions.uid as impression_uid
            FROM callzvons
                LEFT JOIN users ON users.email = callzvons.user_account
                LEFT JOIN impressions ON callzvons.client_number = substring(json_extract_path(json_extract_path(json_extract_path(impressions.fields,'TEL'),'0'),'val')::text,2,12)
                `+where+`
                ORDER BY  callzvons.start_time DESC
                OFFSET `+req.body.offset+` LIMIT `+req.body.limit
*/


  res.db.sequelizePg.query(sql, {
    raw: true
  }).then((items) => {
    res.json({count:count, rows : items[0]})
  })
})
}else{
  res.json({error : 401})
}
