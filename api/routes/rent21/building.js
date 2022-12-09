const controller = require("../../controllers/rent21/building");

module.exports = function(app) {
  app.get("/rent21/building/*", controller.building);
}
