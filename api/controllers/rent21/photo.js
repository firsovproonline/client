const db = require("../../models");
const fs = require('fs')
exports.list = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/photo/list.js', "utf8");
  eval(fileContent);
}
exports.get = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/photo/get.js', "utf8");
  eval(fileContent);
}

exports.post = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/photo/post.js', "utf8");
  eval(fileContent);
}

exports.delete = (req, res) => {
  const fileContent = fs.readFileSync(__dirname +'/dinamic/photo/delete.js', "utf8");
  eval(fileContent);
}

