const Authentication = require("./controllers/authetication");
module.exports = function (app) {
  app.post("/signup", Authentication.signup);
};
