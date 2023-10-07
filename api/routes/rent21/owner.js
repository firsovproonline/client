const controller = require("../../controllers/rent21/owner");

module.exports = function(app) {
  app.get("/rent21/owner", controller.list);
}
