const controller = require("../../controllers/rent21/ob");

module.exports = function(app) {
  app.post("/rent21/ob/*", controller.list);
  app.get("/rent21/ob/*", controller.ob);
  app.put("/rent21/ob", controller.save);

}
