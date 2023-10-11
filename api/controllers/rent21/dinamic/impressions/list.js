let d = new Date()
console.error('start', d)
if(!req.user || (!req.user.isAdmin && !req.user.isRieltor)){
  res.json({'error':401})
}else{
  db.impressins.findAll({

  }).then( (items) =>{
    const promiseAR = [];
    items.forEach(item=>{
      promiseAR.push(new Promise(function(resolve, reject) {
        if(item.dataValues.fields && item.dataValues.fields.TEL && item.dataValues.fields.TEL.length > 0){
          //console.error(item.dataValues.fields.TEL[0].val)
        }
        console.error(1)
        try {
          db.rent21moiZvonki.findOne({
            limit: 1
          }).then(itemZ=>{
            console.error('gggggggggggggggggggggggg')
            resolve()
          })

        }catch (err) {
          console.error('gggggggggggggggggggggggg')
          resolve()
        }
      }))
    })
    Promise.all(promiseAR).then(
      result => {
        console.error('stop', (new Date() - d)/1000)
      }
    )
  })
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
  }
  let order = ` ORDER BY calldate DESC `
  if(req.body.order == 'createdAt'){
    order = ` ORDER BY "createdAt" DESC `
  }
  console.error(order)
  const sql =`SELECT * FROM impressions `+where+order+` OFFSET `+req.body.offset+` LIMIT `+req.body.limit
  db.sequelizePg.query(`SELECT COUNT(id) as  count FROM impressions `+where, {
    raw: true
  }).then((items) => {
    const count = items[0][0].count
    db.sequelizePg.query(`SELECT impressions.*,json_extract_path(impressions.fields,'TEL')::text FROM impressions `+where+order+` OFFSET `+req.body.offset+` LIMIT `+req.body.limit, {
      raw: true
    }).then((items) => {
      res.json({count:count, rows : items[0],sql:sql, body:req.body})
    })
  })

}
