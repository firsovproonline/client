const db = require("../../models");
const fs = require('fs')
const request = require('request');
const ejs = require('ejs');
exports.avito = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/export/avito.js', "utf8");
  eval(fileContent);
}
