const controller = require("../../controllers/rent21/export.js");
module.exports = function(app) {
  app.get("/rent21/export/avito", controller.avito);
}
