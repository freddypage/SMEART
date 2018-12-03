var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String, }
})

UserSchema.plugin(passportLocalMongoose); //this takes the passport local mongoose package we required and add a bunch of method that comes with the package into our schema

module.exports = mongoose.model("User", UserSchema);
