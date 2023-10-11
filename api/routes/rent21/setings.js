const controller = require("../../controllers/rent21/setings.js");

module.exports = function(app) {
  app.get("/rent21/setings/users", controller.userList);
  app.get("/rent21/setings/feeds", controller.feedList);
  app.get("/rent21/setings/db/build/create", controller.createBuild);
  app.get("/rent21/setings/db/address/create", controller.createAddress);
  app.get("/rent21/setings/db/ob/create", controller.createOb);
}
