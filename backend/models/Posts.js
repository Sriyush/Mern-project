const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userid: String,
  username:String,
  thought: String,
  description: String,
});

const PostsModel = mongoose.model("posts", UserSchema);
module.exports = PostsModel;
