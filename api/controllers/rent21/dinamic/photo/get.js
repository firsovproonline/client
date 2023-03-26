const e = req.originalUrl.split('/');
const uid = e[e.length - 1]
// console.error(e.length, e[e.length - 2],e[e.length - 1])
let sql = `SELECT THUMBNAIL FROM foto WHERE ID='`+uid+`'`
if(e.length > 6)
 sql = `SELECT THUMBNAIL FROM foto WHERE UID='`+e[e.length - 2]+`' AND TITLE='`+e[e.length - 1]+`'`

db.sequelizeMysql.query(sql).then(items=>{
  res.status(200).send(items[0][0].THUMBNAIL)
})
