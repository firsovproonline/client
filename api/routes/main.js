const controller = require("../controllers/main");
module.exports = function(app) {
  // app.get("/progress", controller.progress);
  app.get("/test", controller.test);
  app.get("/user", controller.user);
  app.get("/spr", controller.spr);
  app.get("/logout", controller.logout);
}
