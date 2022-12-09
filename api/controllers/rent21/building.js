const db = require("../../models");
const fs = require('fs')

exports.building = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/building.js', "utf8");
  eval(fileContent);
}
