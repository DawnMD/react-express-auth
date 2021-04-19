const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

//Define model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});
//on save hook encrypt password
//Before saving, run the function
userSchema.pre("save", function (next) {
  //get access to the user model
  const user = this;
  //generate salt, run callback
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    //hash/encrypt password with the generated salt, run callback
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }
      //replace plain text with hashed
      user.password = hash;
      next();
    });
  });
});
//userschema methods
userSchema.methods.comparePassword = function (candidatePassowrd, callback) {
  bcrypt.compare(candidatePassowrd, this.password, function (err, isMatch) {
    if (err) {
      callback(err);
    }
    callback(null, isMatch);
  });
};
//Create the model class
const ModelClass = mongoose.model("user", userSchema);
//Export module
module.exports = ModelClass;
