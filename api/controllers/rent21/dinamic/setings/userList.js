if(req.user && req.user.isAdmin){
  const sql = "select * from users"
  db.sequelizePg.query(sql, {
    raw: true,
  }).then(items=>{
    res.json(items[0])
  })
} else{
  res.json({error : 401})
}
