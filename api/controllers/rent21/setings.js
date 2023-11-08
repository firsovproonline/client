const fs = require('fs')
const request = require('request');
exports.userList = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/setings/userList.js', "utf8");
  eval(fileContent);
}


exports.feedList = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/setings/feedList.js', "utf8");
  eval(fileContent);
}

exports.createBuild = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/setings/createBuild.js', "utf8");
  eval(fileContent);
}
exports.createAddress = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/setings/createAddress.js', "utf8");
  eval(fileContent);
}
exports.createOb = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/setings/createOb.js', "utf8");
  eval(fileContent);
}
