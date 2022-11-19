const controller = require("../controllers/yandex");

module.exports = function(app) {
  app.get("/auth/yandex", controller.auth);
  app.get("/auth/yandex/callback", controller.auth);
}
