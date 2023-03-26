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
                        puid,
                        tip,
                        step
                      ])
                      step++
                      //console.log(puid, item);

                    })
                  }
                }
              }
              fs.writeFileSync(__dirname+'../../../config/saveEXPORT.json', JSON.stringify(out))

              resolve({ 'body': req.body })
            }
          })


          //resolve({ 'body': req.body })
        }))


        break;
      case 'ob21':
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
              if(req.body[key].UID == '09152a34-602a-460d-848f-2f6f8829389e'){
                for (const [title, value] of Object.entries(req.body[key])) {
                  out.push([
                    null,
                    req.body[key].UID,
                    'ob21',
                    title,
                    value,
                    'root'
                  ])
                }
                let sql = "delete from fields WHERE `UID` in ('" + req.body[key].UID + "') AND `TIP` <> 'linc21'";
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
                  })
                })
              }
              resolve({ 'body': req.body })

            }
          })
        }));
        break
      case 'address':
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
              resolve({ 'body': req.body })
            }
          })
        }));
        break
      case 'building':
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
              resolve({ 'body': req.body })
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
