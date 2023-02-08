import ss from "sequelize";
import MD5 from 'crypto-js/md5'
const express = require('express')
const cors = require("cors")
const fs = require('fs')

const cookieParser = require('cookie-parser');
const session = require('express-session');
const Sequelize = require("sequelize");
const passport = require('passport');
const YandexStrategy = require('passport-yandex').Strategy;
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const request = require('request');

const db = require("./models");
const config = require("./config/db.config.js");
const ejs = require('ejs');
const corsOptions = {
  origin: "*"
}

passport.serializeUser(function(user, done) {
  // console.error(db.sequelize)
  const sql = "select * from users WHERE login = '" + user.username + "'"
  db.sequelizePg.query(sql, {
    raw: true,
  }).then((items) => {
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

  // done(null, user);

/*
    db.sequelize.query("select * from `users` WHERE `LOGIN` = '" + user.username + "'", [], function(err, result) {
      if (result) {
        if (result.length == 0) {
          var query = "INSERT INTO users SET ?",
            values = {
              LOGIN: user.username,
              EMAIL: user._json.default_email,
              TIP: 'Гость'
            };
          db.sequelize.query(query, values, function(err, result) {
            if (result) {
              user.isAdmin = false;
              user.isRieltor = false;
              user.MZ = -1;
              user.DOSTUP = '';
              done(null, user);
            }
            else {
              console.log(err)
            }
          })
        }
        else {
          var isAdmin = false;
          var isRieltor = false;
          if (result[0].TIP == 'Администратор') {
            isAdmin = true;
          }
          if (result[0].TIP == 'Риэлтор') {
            isAdmin = false;
            isRieltor = true;

          }
          user.isAdmin = isAdmin;
          user.MZ = result[0].MZ;
          user.DOSTUP = result[0].DOSTUP;
          user.isRieltor = isRieltor;
          done(null, user);
        }
      }
      else {
        done(null, user);
      }
    })
*/

});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


passport.use(new YandexStrategy({
    clientID: config.YANDEX_CLIENT_ID,
    clientSecret: config.YANDEX_CLIENT_SECRET,
    callbackURL: "http://firsovpro.online:3022/api/auth/yandex/callback"
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

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json({
  limit: '5mb'
}))
app.use(cookieParser());
// app.use(cookieParser(config.cookieSecret))
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//require('./routes/yandex')(app);
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'uwotm8'
}));
//app.use(express.bodyParser());
app.use(methodOverride());

app.use(passport.initialize());
app.use(passport.session());


app.get('/auth/yandex',
  passport.authenticate('yandex'),
  function(req, res){

    // The request will be redirected to Yandex for authentication, so this
    // function will not be called.
  });

app.get('/auth/yandex/callback',
  passport.authenticate('yandex', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/logout', function(req, res){
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
        fs.writeFileSync(__dirname + '/cianreport.json', JSON.stringify(ob))
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
        fs.writeFileSync(__dirname + '/cianreport1.json', JSON.stringify(ob))
      }
      else {

      }
    }
  });

  request.post('https://api.avito.ru/token/?grant_type=client_credentials&client_id=IYakbUJeEieLz93hCnT3&client_secret=z8EaNtc5IYBJWL-YHY37nDYjm4SmsCcNGRI7XJ18',
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        fs.writeFileSync(__dirname + '/avitoreport_token.text', body);

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
              fs.writeFileSync(__dirname + '/avitoreport_full.json', body);
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
                  for (var i = 0; i < result.length; i++) {
                    avitoItens = avitoItens.concat(result[i].res.items)
                  }
                  fs.writeFileSync(__dirname + '/avitoreport.json', JSON.stringify(avitoItens));
                  //res.json({rows : avitoItens})
                },
                error => {
                 // res.json({rows : 0})
                }
              )
            }
            catch (e) {
              fs.writeFileSync(__dirname + '/avitoreport_error.text', body);
            }
          }
          else {}
        }
        request(options, callback);
      }
      else {
        fs.writeFileSync(__dirname + '/avito_error.text', JSON.stringify(response));
        //res.json({rows : 0,temp:1})
      }
    });


}, 300000);


export default {
  path: '/api',
  handler: app
}
