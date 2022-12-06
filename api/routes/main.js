const controller = require("../controllers/main");

module.exports = function(app) {
  app.get("/test", controller.test);
  app.get("/user", controller.user);
  app.get("/spr", controller.spr);
}
