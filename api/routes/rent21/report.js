const controller = require("../../controllers/rent21/report.js");

module.exports = function(app) {
  app.get("/rent21/report/cian1", controller.cian1);
  app.get("/rent21/report/cian", controller.cian);
  app.get("/rent21/report/avito", controller.avito);
  app.get("/rent21/report/", controller.list);
}
