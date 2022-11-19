const controller = require("../controllers/impressions");

module.exports = function(app) {
  // app.get("/impressions", controller.list);
  app.get("/impressions/list", controller.list);
}
