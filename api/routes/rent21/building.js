const controller = require("../../controllers/rent21/building");

module.exports = function(app) {
  app.post("/rent21/building/find", controller.buildingFind);
  app.get("/rent21/buildingOb/*", controller.buildingOb);
  app.get("/rent21/building/*", controller.building);
}
