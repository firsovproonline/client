const fs = require('fs')
exports.buildingOb = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/buildingOb.js', "utf8");
  eval(fileContent);
}

exports.building = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/building.js', "utf8");
  eval(fileContent);
}
exports.buildingFind = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/buildingFind.js', "utf8");
  eval(fileContent);
}
