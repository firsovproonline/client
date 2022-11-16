const controller = require("../controllers/main");

module.exports = function(app) {
  app.get("/test", controller.test);
}
