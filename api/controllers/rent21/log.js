const fs = require('fs')
exports.avito = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/log/avito.js', "utf8");
  eval(fileContent);
}
exports.cian = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/log/cian.js', "utf8");
  eval(fileContent);
}

exports.list = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/log/list.js', "utf8");
  eval(fileContent);
}
exports.save = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/log/save.js', "utf8");
  eval(fileContent);
}
