const MD5 = require("crypto-js/md5");
const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,
    logging: 0,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);
const db = {};
db.sequelizePg = new Sequelize(config.postgress.db,
  config.postgress.user,
  config.postgress.password, {
  dialect: "postgres",
  host: config.postgress.host
});

module.exports = db;
