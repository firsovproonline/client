const e = req.originalUrl.split('/');
const uid = e[e.length - 1]
const sql = `SELECT THUMBNAIL FROM foto WHERE ID='`+uid+`'`
db.sequelizeMysql.query(sql).then(items=>{
  res.status(200).send(items[0][0].THUMBNAIL)
})
