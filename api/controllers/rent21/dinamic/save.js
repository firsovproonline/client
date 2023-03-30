// import fs from 'fs'
const mysql = require('mysql')

function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function generateUID() {
  return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
}

if(req.user && (req.user.isAdmin || req.user.isRieltor) && req.user.DOSTUP.indexOf('Поиск')> -1) {

  const promiseAR = [];

  for (var key in req.body) {
    switch (key) {
      case 'export':
        // console.log('uid',__dirname)
//        fs.writeFileSync(__dirname+'../../../config/saveEXPORT.json', JSON.stringify(req.body.export.value))
        promiseAR.push(new Promise(function (resolve, reject) {
          db.rent21ob.update(
            {
              exports: req.body.export.value
            },
            {
              where: {
                uid: req.body.export.uid
              },
            }
          ).then(item => {
            if (item[0] == 0) {
              reject({ 'error': 405 })
            } else {
              // var query = "INSERT INTO `export` (`UID`,`VAL`,`TITLE`,`PUID`,`TIP`,`STEP`)  VALUES ?";
              const out = []
              for (const [tip, value] of Object.entries(req.body.export.value)) {
                for (const [title, val] of Object.entries(value)) {
                  //console.log(`${tip} ${title}: ${val}`);
                  if(title!=='PHOTO'){
                    out.push([
                      req.body.export.uid,
                      val,
                      title,
                      null,
                      tip,
                      0
                    ])
                  }else{
                    let step = 0
                    val.forEach(item=>{
                      const puid = generateUID()
                      out.push([
                        req.body.export.uid,
                        item.title,
                        'PHOTO',
                        item.uid,
                        tip,
                        step
                      ])
                      step++
                      //console.log(puid, item);

                    })
                  }
                }
              }
              let sql = "delete from export WHERE `UID` in ('" + req.body.export.uid + "') AND `TIP` <> 'linc21'";
              const connection = mysql.createConnection({
                host: db.config.HOST,
                user: db.config.USER,
                password: db.config.PASSWORD,
                database: db.config.DB,
                debug: false
              });
              connection.query(sql, [], function(err, result) {
                sql = "INSERT INTO  `export` (`UID`,`VAL`,`TITLE`,`PUID`,`TIP`,`STEP`) VALUES ?";
                connection.query(sql, [out], function(err, result) {
                  fs.writeFileSync(__dirname+'../../../config/saveEXPORT.json', JSON.stringify(out))
                  resolve({ 'body': req.body })
                })
              })
            }
          })


          //resolve({ 'body': req.body })
        }))


        break;
      case 'ob21':
        const ob21 = req.body[key]
        promiseAR.push(new Promise(function (resolve, reject) {
          db.rent21ob.update(
            {
              fields: req.body[key]
            },
            {
              where: {
                uid: req.body[key].UID
              },
            }
          ).then(item => {
            if (item[0] == 0) {
              reject({ 'error': 405 })
            } else {
              const out = []
              if(1 == 1){
                for (const [title, value] of Object.entries(ob21)) {
                  out.push([
                    null,
                    ob21.UID,
                    'ob21',
                    title,
                    value,
                    'root'
                  ])
                }
                let sql = "delete from fields WHERE `UID` in ('" + ob21.UID + "') AND `TIP` <> 'linc21'";
                const connection = mysql.createConnection({
                  host: db.config.HOST,
                  user: db.config.USER,
                  password: db.config.PASSWORD,
                  database: db.config.DB,
                  debug: false
                });
                connection.query(sql, [], function(err, result) {
                  sql = "INSERT INTO  `fields` (ID,UID,TIP,TITLE,VAL,PUID) VALUES ?";
                  connection.query(sql, [out], function(err, result) {
                    fs.writeFileSync(__dirname+'../../../config/saveOB21.json', JSON.stringify(out))
                    resolve({ 'body': req.body })
                  })
                })
              }

            }
          })
        }));
        break
      case 'address':
        const address = req.body[key]
        promiseAR.push(new Promise(function (resolve, reject) {
          db.rent21address.update(
            {
              fields: req.body[key]
            },
            {
              where: {
                uid: req.body[key].UID
              },
            }
          ).then(item => {
            if (item[0] == 0) {
              reject({ 'error': 405 })
            } else {
              const out = []
              if(1==1){
                for (const [title, value] of Object.entries(address)) {
                  if(title !=='METRO'){
                    out.push([
                      null,
                      address.UID,
                      'adRes21',
                      title,
                      value,
                      'root'
                    ])
                  }else{
                    value.forEach(item=>{
                      const puid = generateUID()
                      out.push([
                        null,
                        address.UID,
                        'adRes21',
                        'METRO',
                        item.NAME,
                        puid
                      ])
                      out.push([
                        null,
                        address.UID,
                        'adRes21',
                        'GLMETRO',
                        item.GLMETRO,
                        puid
                      ])
                      out.push([
                        null,
                        address.UID,
                        'adRes21',
                        'UDTIP',
                        item.UDTIP,
                        puid
                      ])
                      out.push([
                        null,
                        address.UID,
                        'adRes21',
                        'UD',
                        item.UD,
                        puid
                      ])
                    })
                  }
                }
                let sql = "delete from fields WHERE `UID` in ('" + address.UID + "') AND `TIP` <> 'linc21'";
                const connection = mysql.createConnection({
                  host: db.config.HOST,
                  user: db.config.USER,
                  password: db.config.PASSWORD,
                  database: db.config.DB,
                  debug: false
                });
                connection.query(sql, [], function(err, result) {
                  sql = "INSERT INTO  `fields` (ID,UID,TIP,TITLE,VAL,PUID) VALUES ?";
                  connection.query(sql, [out], function(err, result) {
                    fs.writeFileSync(__dirname+'../../../config/saveADDRESS.json', JSON.stringify(out))
                    resolve({ 'body': req.body })
                  })
                })
              }
            }
          })
        }));
        break
      case 'building':
        const building = req.body[key]
        promiseAR.push(new Promise(function (resolve, reject) {
          db.rent21building.update(
            { fields: req.body[key] },
            {
              where: {
                uid: req.body[key].UID
              },
            }
          ).then(item => {
            if (item[0] == 0) {
              reject({ 'error': 405 })
            } else {
              const out = []
              for (const [title, value] of Object.entries(building)) {
                out.push([
                  null,
                  building.UID,
                  'buid21',
                  title,
                  value,
                  'root'
                ])
              }
              let sql = "delete from fields WHERE `UID` in ('" + building.UID + "') AND `TIP` <> 'linc21'";
              const connection = mysql.createConnection({
                host: db.config.HOST,
                user: db.config.USER,
                password: db.config.PASSWORD,
                database: db.config.DB,
                debug: false
              });
              connection.query(sql, [], function(err, result) {
                sql = "INSERT INTO  `fields` (ID,UID,TIP,TITLE,VAL,PUID) VALUES ?";
                connection.query(sql, [out], function(err, result) {
                  fs.writeFileSync(__dirname+'../../../config/saveBuilding.json', JSON.stringify(out))
                  resolve({ 'body': req.body })
                })
              })
            }
          })
        }));
        break
      default:
    }
  }
  Promise.all(promiseAR).then(
    result => {
      res.json({ status: true })
    },
    error => res.json({ status: false })
  )
}else{
  res.json({error : 401})
}
