// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   username: String,
// });

// const UsersModel = mongoose.model("users", UserSchema);
// module.exports = UsersModel;

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  username: String,
  description: String, // Added description field
  twitter: String, // Added Twitter field
  instagram: String, // Added Instagram field
  // ... other fields
});

const UsersModel = mongoose.model("users", UserSchema);
module.exports = UsersModel;

