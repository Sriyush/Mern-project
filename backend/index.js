const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersModel = require("./models/Users");
const PostsModel = require("./models/Posts");
const app = express();
app.use(express.json());

app.use(cors());

const dbUrl =
  "mongodb+srv://ayush:zBjlJ3epUreo1VCA@cluster0.z5hsflh.mongodb.net/?retryWrites=true&w=majority";

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(dbUrl, connectionParams)
  .then(() => {
    console.info("Connected to the DB");
  })
  .catch((e) => {
    console.log("Error:", e);
  });

// Handeling signup request
app.post("/register", (req, res) => {
  UsersModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Handeling login request
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Received login request:", email, password);

  UsersModel.findOne({ email: email })
    .then((user) => {
      // console.log("User found:", user);
      if (user) {
        if (user.password === password) {
          res.json({ status: "success", user: user });
        } else {
          res.json("wrong password");
        }
      } else {
        res.json("email doesn't exist");
      }
    })
    .catch((error) => {
      console.error("Error in login:", error);
      res.status(500).json("Internal Server Error");
    });
});


app.listen(3001, () => {
  console.log("server is running");
});

//trying to display data
app.get("/getuserdata/:userId", (req, res) => {
  const userId = req.params.userId;

  UsersModel.findById(userId)
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    })
    .catch((error) => {
      console.error("Error in fetching user data:", error);
      res.status(500).json("Internal Server Error");
    });
});

//trying to post thoughts
app.post("/postthoughts", (req, res) => {
  const { userId, username,thought } = req.body;

  // Assuming there is a "Thoughts" model, replace it with the actual model you have
  // Create a new post
  PostsModel.create({
    userId: userId,
    username: username,
    thought: thought,
  })
    .then((newThought) => {
      res.json({ status: "success", thought: newThought });
    })
    .catch((error) => {
      console.error("Error in posting thoughts:", error);
      res.status(500).json("Internal Server Error");
    });
});

//trying to get thoughts
app.get("/getthoughts", (req, res) => {
  PostsModel.find()
    .then((thoughts) => {
      res.json(thoughts);
    })
    .catch((error) => {
      console.error("Error in fetching thoughts:", error);
      res.status(500).json("Internal Server Error");
    });
});

//showing posts in profile page
app.get("/getuserposts/:username", (req, res) => {
  const username = req.params.username;

  PostsModel.find({ username: username })
    .then((posts) => {
      res.json(posts);
    })
    .catch((error) => {
      console.error("Error in fetching user posts:", error);
      res.status(500).json("Internal Server Error");
    });
});
//delete posts option
app.delete("/deletepost/:postId", (req, res) => {
  const postId = req.params.postId;
  PostsModel.findByIdAndDelete(postId)
    .then((deletedPost) => {
      if (deletedPost) {
        res.json({ status: "success", message: "Post deleted successfully" });
      } else {
        res.status(404).json({ error: "Post not found" });
      }
    })
    .catch((error) => {
      console.error("Error in deleting post:", error);
      res.status(500).json("Internal Server Error");
    });
});
//zofrax-raxtuc-1mItwe
