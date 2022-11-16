import ss from "sequelize";
import MD5 from 'crypto-js/md5'
const express = require('express')
const cors = require("cors")
const fs = require('fs')
const request = require('request');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const Sequelize = require("sequelize");

const db = require("./models");

const corsOptions = {
  origin: "*"
}

const app = express()
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
require('./routes/main')(app);

export default {
  path: '/api',
  handler: app
}
