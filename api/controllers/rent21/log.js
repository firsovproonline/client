const db = require("../../models");
const fs = require('fs')

exports.list = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/log/list.js', "utf8");
  eval(fileContent);
}
exports.save = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/log/save.js', "utf8");
  eval(fileContent);
}
