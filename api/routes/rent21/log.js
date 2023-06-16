const controller = require("../../controllers/rent21/log");

module.exports = function(app) {
  app.post("/rent21/log/*", controller.list);
  app.put("/rent21/log", controller.save);
}
