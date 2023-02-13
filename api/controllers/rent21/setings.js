const db = require("../../models");
const fs = require('fs')
const request = require('request');
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
