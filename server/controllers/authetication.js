const User = require("../models/user");
const jwt = require("jwt-simple");
const config = require("../config");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}
exports.signup = function (req, res, next) {
  //get email, paasword from request
  const { email, password } = req.body;
  //check if email and password is given
  if (!email || !password) {
    return res.status(422).send({ error: "Must provide email and password" });
  }
  //check if a user with given email exists
  User.findOne({ email }, (err, existingUser) => {
    //if any errors other than existing user
    if (err) {
      return next(err);
    }
    //If exists return error
    if (existingUser) {
      return res.status(422).send({ error: "Email already in use" });
    }
    //If doesnt exists, create and save user
    const user = new User({
      email,
      password,
    });
    user.save((err) => {
      if (err) {
        return next(err);
      }
      //respond as user created
      res.json({ token: tokenForUser(user) });
    });
  });
};
