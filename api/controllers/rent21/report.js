const fs = require('fs')
const request = require('request');
exports.avito = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/report/avito.js', "utf8");
  eval(fileContent);
}

exports.cian1 = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/report/cian1.js', "utf8");
  eval(fileContent);
}


exports.cian = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/report/cian.js', "utf8");
  eval(fileContent);
}

exports.list = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/report/list.js', "utf8");
  eval(fileContent);
}
