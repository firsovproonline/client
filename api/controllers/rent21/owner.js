const db = require("../../models");
const fs = require('fs')
exports.list = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/owner/list.js', "utf8");
  eval(fileContent);
}
