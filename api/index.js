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
  done(null, user);
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


export default {
  path: '/api',
  handler: app
}
