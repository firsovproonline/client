const db = require("../models");
exports.save = (req, res) => {
  if(!req.user || (!req.user.isAdmin && !req.user.isRieltor)){
    res.json({'error':401})
  }else{
    const e = req.originalUrl.split('/');
    const id = e[e.length - 1]
    delete req.body.createdAt
    delete req.body.updatedAt
    delete req.body.id
    if(req.user.isAdmin){
      db.impressins.update(
        req.body,
        {
          where: {
            id: id
          },
        }
      ).then(item=>{
        if(item[0]==0){
          res.json({'error':405})
        }else{
          res.json({'body':req.body,user:req.user,row:item})
        }
      })

    }else{
      db.impressins.update(
        req.body,
        {
          where: {
            id: id,
            user:req.user.emails[0].value
          },
        }
      ).then(item=>{
        if(item[0]==0){
          res.json({'error':405})
        }else{
          res.json({'body':req.body,user:req.user,row:item})
        }
      })

    }
  }
}
exports.cart = (req, res) => {
  if(!req.user || (!req.user.isAdmin && !req.user.isRieltor)){
    res.json({'error':401})
    return
  }
  const e = req.originalUrl.split('/');
  const id = e[e.length - 1]
  db.sequelizePg.query(`SELECT * FROM impressions WHERE id = ` + id, {
    raw: true,
  }).then((items) => {
    res.json(items[0][0])
  })
}

exports.list = (req, res) => {
  if(!req.user || (!req.user.isAdmin && !req.user.isRieltor)){
    res.json({'error':401})
    return
  }
  let where = '';
  if(req.body){
    for (const key in req.body) {
      if (req.body.hasOwnProperty(key)) {
        if(req.body[key] !==''){
          switch (key) {
            case 'plin':
              if(where!==''){
                where += ' AND '
              }
              where += " impressions.plin >= " +req.body[key]
              break
            case 'plout':
              if(where!==''){
                where += ' AND '
              }
              where += " impressions.plout <= " +req.body[key]
              break

            case 'src_number':
              if(where!==''){
                where += ' AND '
              }
              where += " impressions.src_number like '%" +req.body[key]+"%'"
              break
            case 'title':
              if(where!==''){
                where += ' AND '
              }
              where += "( impressions.title like '%" +req.body[key]+"%'"
              where += " OR json_extract_path(impressions.fields,'TEL')::text like '%" +req.body[key]+"%'"
              where += " OR json_extract_path(impressions.fields,'ADDRESS')::text like '%" +req.body[key]+"%'"
              where += " OR json_extract_path(impressions.fields,'REM')::text like '%" +req.body[key]+"%'"
              where += " OR json_extract_path(impressions.fields,'METRO')::text like '%" +req.body[key]+"%'"
              where += " OR json_extract_path(impressions.fields,'SITE')::text like '%" +req.body[key]+"%'"
              where += " OR json_extract_path(impressions.fields,'FIO')::text like '%" +req.body[key]+"%'"
              where += " OR json_extract_path(impressions.fields,'KLEMAIL')::text like '%" +req.body[key]+"%'"

              //json_extract_path(impressions.fields,'TEL')::text
              where += ")"
              break
            case 'id':
              if(where!==''){
                where += ' AND '
              }
              where += " impressions.id = " +req.body[key]
              break
            case 'createdatein':
              if(req.body[key].selectedDate){
                if(where!==''){
                  where += ' AND '
                }
                let day = new Date(req.body[key].selectedDate).getDay()
                if(day<10){
                  day = '0'+day
                }
                let month = new Date(req.body[key].selectedDate).getMonth()+1
                if(month<10){
                  month = '0'+month
                }
                where += 'impressions."createdAt"::date >= \''+new Date(req.body[key].selectedDate).getFullYear()+'-'+
                  month+'-'+
                  day+
                  "'::date"
              }
              break
            case 'createdateout':
              if(req.body[key].selectedDate){
                if(where!==''){
                  where += ' AND '
                }
                let day = new Date(req.body[key].selectedDate).getDay()
                if(day<10){
                  day = '0'+day
                }
                let month = new Date(req.body[key].selectedDate).getMonth()+1
                if(month<10){
                  month = '0'+month
                }
                where += 'impressions."createdAt"::date <= \''+new Date(req.body[key].selectedDate).getFullYear()+'-'+
                  month+'-'+
                  day+
                  "'::date"
              }
              break

            case 'dateout':
              if(req.body[key].selectedDate){
                if(where!==''){
                  where += ' AND '
                }
                where += " impressions.calldate <= " +new Date(req.body[key].selectedDate).getTime() / 1000
              }
              break
            case 'datein':
              if(req.body[key].selectedDate){
                if(where!==''){
                  where += ' AND '
                }
                where += " impressions.calldate >= " +new Date(req.body[key].selectedDate).getTime() / 1000
              }
              break
            case 'user':
              if(req.body[key]!='all'){
                if(where!==''){
                  where += ' AND '
                }
                where += " impressions.user = '" +req.body[key]+"'"
              }
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
    console.error(where)
  }
  let order = ` ORDER BY calldate DESC `
  if(req.body.order == 'createdAt'){
    order = ` ORDER BY "createdAt" DESC `
  }
  const sql =`SELECT * FROM impressions `+where+order+` OFFSET `+req.body.offset+` LIMIT `+req.body.limit
  console.error(sql)
  db.sequelizePg.query(`SELECT COUNT(id) as  count FROM impressions `+where, {
    raw: true
  }).then((items) => {
    const count = items[0][0].count
    db.sequelizePg.query(`SELECT impressions.*,json_extract_path(impressions.fields,'TEL')::text FROM impressions `+where+order+` OFFSET `+req.body.offset+` LIMIT `+req.body.limit, {
      raw: true
    }).then((items) => {
      console.error(req.body)
      res.json({count:count, rows : items[0],sql:sql, body:req.body})
    })
  })
}
