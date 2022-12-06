import ss from "sequelize";
import MD5 from 'crypto-js/md5'
const express = require('express')
const cors = require("cors")
const fs = require('fs')
const request = require('request');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const Sequelize = require("sequelize");
const passport = require('passport');
const YandexStrategy = require('passport-yandex').Strategy;
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const db = require("./models");
const config = require("./config/db.config.js");

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


export default {
  path: '/api',
  handler: app
}
