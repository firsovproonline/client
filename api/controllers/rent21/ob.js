const fs = require('fs')
exports.list = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/list.js', "utf8");
  eval(fileContent);
}
exports.ob = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/ob.js', "utf8");
  eval(fileContent);
}
exports.save = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/save.js', "utf8");
  eval(fileContent);
}
