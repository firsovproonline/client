const e = req.originalUrl.split('/');
const uids = [];
for (let i = e.length - 1; i >4;i--){
  uids.push(e[i])
}
const sql = "SELECT ID,UID,TITLE,STEP FROM foto WHERE UID in ('" + uids.join("','") + "')"
res.db.sequelizeMysql.query(sql).then(items=>{
  res.json({rows : items[0], sql:sql})
})
