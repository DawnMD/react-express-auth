const passport = require("passport");
const User = require("../models/user");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

//Setup options for JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret,
};

//Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  //See if userID in payload exists in our database
  User.findById(payload.sub, function (err, user) {
    if (err) {
      return done(err, false);
    }
    if (user) {
      //If present call done with user object
      return done(null, user);
    } else {
      //If absent call done without user object
      return done(null, false);
    }
  });
});

//Tell passport to use strategy
passport.use(jwtLogin);
