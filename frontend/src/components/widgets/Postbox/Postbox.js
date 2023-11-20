import React, { useState } from "react";
import './Postbox.css';
// import { Avatar, Button } from "@material-ui/core";
import axios from "axios";
function Postbox() {
    const [thought, setThought] = useState("");
    const handlePostThought = () => {
        const userId = localStorage.getItem("userId");
        const username = localStorage.getItem("username");

        if (userId && username && thought.trim() !== "") {
          axios
            .post("http://localhost:3001/postthoughts", {
              userId: userId,
              username: username,
              thought: thought,
            })
            .then((response) => {
              console.log(response.data);
              const postId = response.data._id;
              localStorage.setItem('postId', postId);
              // Add any additional logic after successfully posting a thought
            })
            .catch((error) => {
              console.error("Error posting thought:", error);
            });
        }
      };    
    return (
        <div className="postbox">
            <form>
                <div className="postbox__input">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="userImage"
                style={{height:'50px', borderRadius:'999px'}}></img>
                <input
                    onChange={(e) => setThought(e.target.value)}
                    // value={tweetMessage}
                    className="inp"
                    placeholder="What's on your mind?"
                    type="text"
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
    )
}

export default Postbox;