const db = require("../models");
const fs = require('fs')

exports.listCall = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/rent21/dinamic/recentcalls/listCall.js', "utf8");
  eval(fileContent);

}
