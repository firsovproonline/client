const controller = require("../controllers/recentcalls");

module.exports = function(app) {
  // app.get("/impressions", controller.list);
  app.get("/recentcalls/list", controller.list);
}
