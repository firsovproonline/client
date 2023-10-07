const controller = require("../controllers/recentcalls");

module.exports = function(app) {
  // app.get("/impressions", controller.list);
//app.post("/recentcalls/list", controller.list);
  app.post("/recentcalls/listCall", controller.listCall);
}
