const controller = require("../../controllers/rent21/log");

module.exports = function(app) {
  app.get("/rent21/log/cian", controller.cian);
  app.get("/rent21/log/avito", controller.avito);
  app.post("/rent21/log/*", controller.list);
  app.put("/rent21/log", controller.save);
}
