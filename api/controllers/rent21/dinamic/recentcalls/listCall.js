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
  console.error('where', where)
}
db.sequelizePg.query(`SELECT COUNT(id) as  count FROM callzvons `+where, {
  raw: true
}).then((items) => {
  const count = items[0][0].count
  const sql = `SELECT callzvons.*
            FROM callzvons `+where+` ORDER BY  callzvons.start_time DESC
                OFFSET `+req.body.offset+` LIMIT `+req.body.limit
  console.error('++++++++++++++',sql)

  db.sequelizePg.query(sql, {
    raw: true
  }).then((items) => {
    // console.error(req.body)
    res.json({count:count, rows : items[0]})
  })
})
}else{
  console.error(req.user)
  res.json({error : 401})
}
