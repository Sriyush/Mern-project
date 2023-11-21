const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  username: String,
  description: String,
  twitter: String,
  instagram: String,
  postCount: {
    type: Number,
    default: 0, // Initialize postCount with 0
  },
  // ... other fields
});

const UsersModel = mongoose.model("users", UserSchema);
module.exports = UsersModel;
