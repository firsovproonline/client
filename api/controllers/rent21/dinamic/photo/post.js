const gm = require('gm')
const mysql = require('mysql')
//console.error('fffffffffffffffff',req.files.file)
if(req.user && (req.user.isAdmin || req.user.isRieltor)){
  const gm = require('gm')
  const mysql = require("mysql")
  req.files.file.mv('./temp/' + req.files.file.md5);
  const extFile = req.files.file.name.split('.')[req.files.file.name.split('.').length-1].toUpperCase()
  //console.error('===============================', extFile)
  gm('./temp/'+req.files.file.md5).resize(1024, 600).toBuffer(extFile, function(err, PHOTO) {
    gm('./temp/'+req.files.file.md5).resize(170, 80).toBuffer(extFile, function(err, THUMBNAIL) {
      const connectionFOTO = mysql.createConnection({
        host: db.config.HOST,
        user: db.config.USER,
        password: db.config.PASSWORD,
        database: db.config.DB,
        debug: false
      });
      let sql = "INSERT INTO foto SET ?"
      console.error('photo')
      const value = {
        PHOTO: PHOTO,
        THUMBNAIL: THUMBNAIL,
        TITLE: req.files.file.md5,
        UID: req.header('uid')
      };
      connectionFOTO.connect();
      connectionFOTO.query(sql, value, function(err, result) {
        sql = `SELECT ID FROM foto WHERE UID='`+req.header('uid')+`' AND TITLE='`+req.files.file.md5+`'`
        connectionFOTO.end()
        db.sequelizeMysql.query(sql).then(items=>{
            res.json({id: items[0][0].ID})
        })
//        res.json({1:sql})
      })
    })
  })

}else{
  res.json({error:401})
}
