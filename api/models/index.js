const MD5 = require("crypto-js/md5");
const config = require("../config/db.config.js");

const {Sequelize, Op} = require("sequelize");
const sequelizeMysql = new Sequelize(
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
db.progress = {total: 0,current:0}
db.config = config
db.Op = Op
db.sequelizePg = new Sequelize(config.postgress.db,
  config.postgress.user,
  config.postgress.password, {
  dialect: "postgres",
  host: config.postgress.host,
  logging: 0
});
const sequelize = db.sequelizePg;
db.sequelizeMysql =sequelizeMysql;
db.sequelizeMysql.sync({force: false});
db.impressins = require("../models/impressions.js")(sequelize, Sequelize);
db.rent21ob = require("../models/rent21.ob.model.js")(sequelize, Sequelize);
db.rent21address = require("../models/rent21.address.model.js")(sequelize, Sequelize);
db.rent21building = require("../models/rent21.building.model.js")(sequelize, Sequelize);
db.rent21owner = require("../models/rent21.owner.model.js")(sequelize, Sequelize);
db.rent21export = require("../models/rent21.export.model.js")(sequelize, Sequelize);

db.sequelizePg.sync({force: false})
module.exports = db;
