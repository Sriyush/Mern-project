import React, { useState,useEffect } from "react";
import "./Postbox.css";
// import { Avatar, Button } from "@material-ui/core";
import axios from "axios";
function Postbox() {
  const [thought, setThought] = useState("");
  const [userDescription, setUserDescription] = useState("");
  useEffect(() => {
    const userId = localStorage.getItem("userId");
  
    if (userId) {
      // Fetch user data using the stored user ID
      axios
        .get(`${process.env.REACT_APP_API_URL}/getuserdata/${userId}`)
        .then((response) => {
          const user = response.data;
          setUserDescription(user.description || ""); // Set user's description or an empty string if not available
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);
  const handlePostThought = () => {
    const userId = localStorage.getItem("userId"); // Assuming you store the user ID in localStorage
    const username = localStorage.getItem("username");
    if (userId && username && thought.trim() !== "") {
      axios
        .post(`${process.env.REACT_APP_API_URL}/postthoughts`, {
          userId: userId,
          username: username,
          thought: thought,
          description: userDescription,
        })
        .then((response) => {
          console.log(response.data);
          // Add any additional logic after successfully posting a thought
        })
        .catch((error) => {
          console.error("Error posting thought:", error);
        });
    }
  };
  return (
    <div className="postbox border-2 rounded-lg mr-16">
      <form>
        <div className="postbox__input">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="userImage"
            style={{ height: "50px", width: "50px", borderRadius: "999px" }}
          ></img>
          <input
            onChange={(e) => setThought(e.target.value)}
            // value={tweetMessage}
            className="inp"
            placeholder="What's on your mind?"
            type="text"
            style={{ width: "450px"}}
          />
        </div>

        {/* <input
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className="postbox__imageInput"
                placeholder="Optional: Enter image URL"
                type="text"
                /> */}

        <button
          onClick={handlePostThought}
          type="submit"
          className="postButton"
        >
          <span>Post</span>
        </button>
      </form>
    </div>
  );
}

export default Postbox;
