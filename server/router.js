const Authentication = require("./controllers/authetication");
const passport = require("passport");
const passportService = require("./services/passport");

const requireAuth = passport.authenticate("jwt", { session: false });

module.exports = function (app) {
  app.get("/", requireAuth, function (req, res) {
    res.send({ hi: "there" });
  });
  app.post("/signup", Authentication.signup);
};
