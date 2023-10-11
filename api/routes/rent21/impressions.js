const controller = require("../../controllers/rent21/impressions");

module.exports = function(app) {
  app.get("/rent21/impressions/*", controller.cart);
  app.post("/rent21/impressions/list", controller.list);
  app.put("/rent21/impressions/*", controller.save);
}
