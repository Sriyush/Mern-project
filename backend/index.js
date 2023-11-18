const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersModel = require("./models/Users");

const app = express();
app.use(express.json());

app.use(cors());

const dbUrl =
  "mongodb+srv://shivamkjha:zofrax-raxtuc-1mItwe@cluster0.z5hsflh.mongodb.net/?retryWrites=true&w=majority";

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
          res.json("success");
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

//zofrax-raxtuc-1mItwe
