const controller = require("../controllers/impressions");

module.exports = function(app) {
  app.get("/impressions/*", controller.cart);
  app.post("/impressions/list", controller.list);
  app.put("/impressions/*", controller.save);
}
