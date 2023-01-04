const controller = require("../../controllers/rent21/photo");

module.exports = function(app) {
  app.get("/rent21/photo/list/*", controller.list);
  app.get("/rent21/photo/*", controller.get);
}
