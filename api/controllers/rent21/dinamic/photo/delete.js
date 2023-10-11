const mysql = require('mysql')
if(req.user && (req.user.isAdmin || req.user.isRieltor)){
  const e = req.originalUrl.split('/');
  const id = e[e.length - 1]
  const connectionFOTO = mysql.createConnection({
    host: db.config.HOST,
    user: db.config.USER,
    password: db.config.PASSWORD,
    database: db.config.DB,
    debug: false
  });
  connectionFOTO.connect();
  connectionFOTO.query("delete from foto WHERE `ID`='" + id + "'", [], function(err, result) {
    if (result) {
      connectionFOTO.end()
      res.json(result);
    } else {
      res.json({
        data: err
      });
    }
  })
}else{
  res.json({error:401})
}
