const db = require("../../models");
const fs = require('fs')
exports.save = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/impressions/save.js', "utf8");
  eval(fileContent);
}
exports.cart = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/impressions/cart.js', "utf8");
  eval(fileContent);
}
exports.list = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/impressions/list.js', "utf8");
  eval(fileContent);
}
