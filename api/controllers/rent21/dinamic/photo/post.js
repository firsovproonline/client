const gm = require('gm')
const mysql = require('mysql')
console.error('fffffffffffffffff')
if(req.user && (req.user.isAdmin || req.user.isRieltor)){
  const gm = require('gm')
  const mysql = require("mysql")
  req.files.file.mv('./temp/' + req.files.file.name);
  gm('./temp/'+req.files.file.name).resize(1024, 600).toBuffer('JPG', function(err, PHOTO) {
    gm('./temp/'+req.files.file.name).resize(170, 80).toBuffer('JPG', function(err, THUMBNAIL) {
      const connectionFOTO = mysql.createConnection({
        host: db.config.HOST,
        user: db.config.USER,
        password: db.config.PASSWORD,
        database: db.config.DB,
        debug: false
      });
      const sql = "INSERT INTO foto SET ?"
      console.error('photo')
      const value = {
        PHOTO: PHOTO,
        THUMBNAIL: THUMBNAIL,
        TITLE: req.files.file.name,
        UID: req.header('uid')
      };
      connectionFOTO.connect();
      connectionFOTO.query(sql, value, function(err, result) {
        connectionFOTO.end()
        res.json({1:1})
      })
    })
  })

}else{
  res.json({error:401})
}
