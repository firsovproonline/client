const controller = require("../../controllers/rent21/map.js");

module.exports = function(app) {
  app.post("/rent21/map", controller.list);
}
