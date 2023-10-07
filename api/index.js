import ss from "sequelize";
import MD5 from 'crypto-js/md5'
import * as Console from 'console'
import sqlite3 from 'sqlite3'
import crypto from 'crypto'
const express = require('express')
const mysql = require("mysql")
const cors = require("cors")
const fs = require('fs')
const gm = require('gm')
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const Sequelize = require("sequelize");
const passport = require('passport');
const YandexStrategy = require('passport-yandex').Strategy;
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const request = require('request');
const {Base64} = require('js-base64');
const db = require("./models");
const config = require("./config/db.config.js");
const ejs = require('ejs');
const SQLiteStore = require('connect-sqlite3')(session);
//require('https').globalAgent.options.rejectUnauthorized = false;
var db3 = new sqlite3.Database('todos.db');
db3.serialize(()=> {
  // create the database schema for the todos app
  db3.run("CREATE TABLE IF NOT EXISTS users ( \
    id INTEGER PRIMARY KEY, \
    username TEXT UNIQUE, \
    hashed_password BLOB, \
    salt BLOB \
  )");

  db3.run("CREATE TABLE IF NOT EXISTS todos ( \
    id INTEGER PRIMARY KEY, \
    owner_id INTEGER NOT NULL, \
    title TEXT NOT NULL, \
    completed INTEGER \
  )");

  // create an initial user (username: alice, password: letmein)
  var salt = crypto.randomBytes(16);
  db3.run('INSERT OR IGNORE INTO users (username, hashed_password, salt) VALUES (?, ?, ?)', [
    'alice',
    crypto.pbkdf2Sync('letmein', salt, 310000, 32, 'sha256'),
    salt
  ]);
});



const corsOptions = {
  origin: "*"
}

function headerToJson(header){
  const json1 = {}
  header.split(';').forEach(item=>{
    json1[item.split('=')[0].trim()] = item.split('=')[1]
  })
  return json1
}

function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function generateUID() {
  return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
}
passport.serializeUser((user, done)=> {
  //console.error('serializeUser', user)
  const sql = "select * from users WHERE login = '" + user.username + "'"
  db.sequelizePg.query(sql, {
    raw: true,
  }).then((items) => {
    if(items[0].length === 0){
      user.isAdmin = false;
      user.MZ = '';
      user.DOSTUP = '';
      user.isRieltor = false;
      done(null, user);
      return
    };
    var isAdmin = false;
    var isRieltor = false;
    if (items[0][0].tip == 'Администратор') {
      isAdmin = true;
    }
    if (items[0][0].tip == 'Риэлтор') {
      isAdmin = false;
      isRieltor = true;
    }
    user.isAdmin = isAdmin;
    user.MZ = items[0][0].mz;
    user.DOSTUP = items[0][0].dostup;
    user.isRieltor = isRieltor;
    done(null, user);
  })
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


passport.use(new YandexStrategy({
    clientID: config.YANDEX_CLIENT_ID,
    clientSecret: config.YANDEX_CLIENT_SECRET,
    callbackURL: config.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      // To keep the example simple, the user's Yandex profile is returned
      // to represent the logged-in user.  In a typical application, you would
      // want to associate the Yandex account with a user record in your
      // database, and return that user instead.
      return done(null, profile);
    });
  }
));

const app = express()
// require('./routes/main')(app);
/*
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json({
  limit: '5mb'
}))

 */
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(fileUpload({
  createParentPath: true,
  limits: {
    fileSize: 20 * 1024 * 10024 * 10024 //2MB max file(s) size
  },
}));

app.use(cookieParser());
// app.use(cookieParser(config.cookieSecret))
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//require('./routes/yandex')(app);


app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'uwotm8'
}));



app.use(passport.initialize());
app.use(passport.session());

//app.use(express.bodyParser());
//app.use(methodOverride());

app.use((req, res, next)=> {
  //console.error('app.use',req.cookies)
  next();
/*
  if(!app.users) app.users= {}
  if(req.cookies  && req.cookies['connect.sid']) {
    if (req.user) {
      app.users[req.cookies['connect.sid']] = req.user
      fs.writeFileSync('users.json', JSON.stringify(app.users), "utf8")
    }else{
      let users =JSON.parse(fs.readFileSync('users.json', "utf8"))
      if(users[req.cookies['connect.sid']]){
        req.user = users[req.cookies['connect.sid']]
      }else{
//        console.error('not user')
      }
    }
  }
  next();
 */
});

app.get('/auth/yandex',
  passport.authenticate('yandex'),
  function(req, res){

    // The request will be redirected to Yandex for authentication, so this
    // function will not be called.
  });

app.get('/auth/yandex/callback',
  passport.authenticate('yandex', { failureRedirect: '/login' }),
  function(req, res) {
    //console.error('/auth/yandex/callback', req.query)
    res.redirect('/?oldurl=1');
  });
// progress
app.get('/progress', function(req, res){
  res.json(db.progress)
});
// ddddddddddddddddddddddddddddd
app.get('/logout111', function(req, res){
  //console.log(req.cookies)
  req.logout();
  res.redirect('/');
});


require('./routes/main')(app);
require('./routes/impressions')(app);
require('./routes/recentcalls')(app);
require('./routes/rent21/ob')(app);
require('./routes/rent21/map')(app);
require('./routes/rent21/report')(app);
require('./routes/rent21/export')(app);
require('./routes/rent21/building')(app);
require('./routes/rent21/photo')(app);
require('./routes/rent21/setings')(app);
require('./routes/rent21/log')(app);
require('./routes/rent21/owner')(app);

var timerIdCian = setInterval(function() {
  console.log("get CIAN")

  var request = require('request');
  request({
    url: "https://public-api.cian.ru/v1/get-order",
    method: "GET",
    headers: {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjI0MTQzNDd9.tnl_IpjFbd6npeK5eZawYTOxmBudZMLey70YhS3jRQs",
      "content-type": "application/json"
    },
    body: ""
  }, function(error, response, body) {
    if (error) {

    }
    else {
      if (response.statusCode == 200) {
        var J = JSON.parse(body);
        var ob = {};
        for (var i = 0; i < J.result.offers.length; i++) {
          ob[J.result.offers[i].externalId] = J.result.offers[i];
        }
        fs.writeFileSync(__dirname + '/config/cianreport.json', JSON.stringify(ob))
      }
      else {

      }
    }
  });

  request({
    url: "https://public-api.cian.ru/v1/get-order",
    method: "GET",
    headers: {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjg4NDU2Nn0.CoaLFWfCsb7B__GGP0t7OMWO_n7Hajhwkq3u9YxWHrw",
      "content-type": "application/json"
    },
    body: ""
  }, function(error, response, body) {
    if (error) {

    }
    else {
      if (response.statusCode == 200) {
        var J = JSON.parse(body);
        //console.log('cian ==== ', J)
        var ob = {};
        for (var i = 0; i < J.result.offers.length; i++) {
          ob[J.result.offers[i].externalId] = J.result.offers[i];
        }
        fs.writeFileSync(__dirname + '/config/cianreport1.json', JSON.stringify(ob))
      }
      else {

      }
    }
  });

  request.post('https://api.avito.ru/token/?grant_type=client_credentials&client_id=IYakbUJeEieLz93hCnT3&client_secret=z8EaNtc5IYBJWL-YHY37nDYjm4SmsCcNGRI7XJ18',
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        fs.writeFileSync(__dirname + '/config/avitoreport_token.text', body);

        const access_token = JSON.parse(body).access_token;
        var options = {
          url: 'https://api.avito.ru/autoload/v2/reports/last_completed_report',
          headers: {
            'Authorization': 'Bearer ' + access_token
          }
        };
        function callback(error, response, body) {
          if (!error && response.statusCode == 200) {
            try {
              fs.writeFileSync(__dirname + '/config/avitoreport_full.json', body);
              const J = JSON.parse(body);
              const report_id = J.report_id
              const section_stats = J.section_stats
              const pages = Math.floor(section_stats.count / 50)
              let avitoItens = []
              const promiseAR = [];
              for (let i=0;i<=pages;i++){
                promiseAR.push(new Promise(function(resolve, reject) {
                  const reportOptions = {
                    url: 'https://api.avito.ru/autoload/v2/reports/'+report_id+'/items?page='+i,
                    headers: {
                      'Authorization': 'Bearer ' + access_token
                    }
                  }
                  request(reportOptions,(error, response, body) =>{
                    if (!error && response.statusCode == 200) {
                      resolve({
                        res: JSON.parse(body)
                      })
                    }else{
                      reject({})
                    }
                  });

                }));
              }
              Promise.all(promiseAR).then(
                result => {
                  fs.writeFileSync(__dirname + '/config/avitoreport.text', JSON.stringify(result));
                  for (var i = 0; i < result.length; i++) {
                    if(result[i].res && result[i].res.items && result[i].res.items.length > 0){
                      avitoItens = avitoItens.concat(result[i].res.items)
                    }
                  }
                  fs.writeFileSync(__dirname + '/config/avitoreport.json', JSON.stringify(avitoItens));
                  //res.json({rows : avitoItens})
                },
                error => {
                 // res.json({rows : 0})
                }
              )
            }
            catch (e) {
              fs.writeFileSync(__dirname + '/config/avitoreport_error.text', body);
            }
          }
          else {}
        }
        request(options, callback);
      }
      else {
        try {
          fs.writeFileSync(__dirname + '/config/avito_error.text', response);
        }catch (err) {
          console.log('Ошибка с avito',response)
        }
      }
    });


}, 300000);

function GetLastZvon(ob, func) {
  console.log('получаем мои звонки');
  var request = require('request');
  request({
    method: 'post',
    url: 'https://rent1.moizvonki.ru/api/v1',
    body: ob,
    headers: {
      "content-type": "application/json"
    },
    json: true,
  }, function(error, response, body) {
    if (ob.out == undefined) {
      ob.out = {};
      ob.uids = [];
    }
    if (body) {
      for (var i = 0; i < body.results.length; i++) {
        ob.out[body.results[i].db_call_id] = body.results[i];
        ob.uids.push(body.results[i].db_call_id)
      }
      console.log(body.results_next_offset)
      if (body.results_next_offset != 0) {
        ob.from_offset = body.results_next_offset;
        setTimeout(GetLastZvon, 30000, ob, func);
      }
      else {
        try {
          fs.writeFileSync(__dirname + '/config/moizvonki.json', JSON.stringify(ob.out));
          for (let key in ob.out){
            //console.log(ob.out[key])
          }
        }catch (err) {
          console.log('Ошибка с звонками',response)
        }


        /*
                connection.query("select `db_call_id` from  `callzvon` WHERE `db_call_id` in ('" + ob.uids.join("','") + "')", [], function(err, result) {
                  for (var i = 0; i < result.length; i++) {
                    delete(ob.out[result[i].db_call_id]);
                  }
                  var values = [];
                  var query = "INSERT INTO `callzvon` (`direction`,`user_account`,`client_number`,`src_number`,`duration`," +
                    "`user_id`,`answer_time`,`src_id`,`client_name`,`recording`,`answered`,`db_call_id`,`start_time`,`end_time`" +
                    ")  VALUES ?";
                  var flag = false;
                  for (var key in ob.out) {
                    flag = true;
                    values.push([
                      ob.out[key].direction,
                      ob.out[key].user_account,
                      ob.out[key].client_number,
                      ob.out[key].src_number,
                      ob.out[key].duration,
                      ob.out[key].user_id,
                      ob.out[key].answer_time,
                      ob.out[key].src_id,
                      ob.out[key].client_name,
                      ob.out[key].recording,
                      ob.out[key].answered,
                      ob.out[key].db_call_id,
                      ob.out[key].start_time,
                      ob.out[key].end_time,
                    ]);

                  }
                  if (flag) {
                    connection.query(query, [values], function(err, result) {
                      if (result) {
                        func(ob.out)
                      }
                      else {
                        func(err);
                      }
                    });

                  }
                  else {
                    func(ob.out)
                  }
                });

         */
      }

    }
    else {
      console.log(error)
      func(null)
    }
  });

}

let newDate = Date.now() + -3 * 24 * 3600 * 1000;
let outOb = {
  "action": "calls.list",
  "from_date": new Date(newDate).getTime() / 1000,
  "max_results": 100,
  "from_offset": 0,
  "supervised": 1,
  "do_sort": 1,
  "user_name": 'roman@rent21.ru',
  "api_key": "53j0vmmrccrk842svakb33icayo3qe0t"
};
//GetLastZvon(outOb, function(data) {
//  console.log('new звонки ', new Date(), data);
//})



export default {
  path: '/api',
  handler: app
}
