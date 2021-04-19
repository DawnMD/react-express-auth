const passport = require("passport");
const User = require("../models/user");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

//Setup Local login strategy
const localOptions = {
  usernameField: "email",
};
//Create Local Strategy
const localLogin = new LocalStrategy(
  localOptions,
  function (email, passowrd, done) {
    //See if email and password is correct
    User.findOne({ email }, function (err, user) {
      if (err) {
        return err;
      }
      //If user not found
      if (!user) {
        return done(null, false);
      }
      //If user found then compare password
      user.comparePassword(passowrd, function (err, isMatch) {
        if (err) {
          return done(err);
        }
        if (!isMatch) {
          return done(null, false);
        }
        return done(null, user);
      });
    });
  }
);
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
passport.use(localLogin);
