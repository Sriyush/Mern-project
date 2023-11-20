const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  username: String,
});

const UsersModel = mongoose.model("users", UserSchema);
module.exports = UsersModel;
