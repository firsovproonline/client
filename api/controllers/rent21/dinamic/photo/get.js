const {Base64} = require('js-base64');
const e = req.originalUrl.split('/');
const uid = e[e.length - 1]
// console.error(e.length, e[e.length - 2],e[e.length - 1])
let sql = `SELECT THUMBNAIL FROM foto WHERE ID='`+uid+`'`
if(e.length > 6){
  e[e.length - 1] = Base64.decode(e[e.length - 1])
  sql = `SELECT THUMBNAIL FROM foto WHERE UID='`+e[e.length - 2]+`' AND TITLE='`+e[e.length - 1]+`'`
  //console.error('========',sql)
}
res.db.sequelizeMysql.query(sql).then(items=>{
  if(items[0] && items[0][0] && items[0][0].THUMBNAIL){
    res.status(200).send(items[0][0].THUMBNAIL)
  }else{
    res.status(200).send('')
    console.error('Ошибка имени',e[e.length - 1])

  }
})
