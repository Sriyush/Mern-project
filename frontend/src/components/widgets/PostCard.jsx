import React, { useState} from 'react';
import './style.css';
import PropTypes from 'prop-types'; 
import {
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineSend,
  AiFillHeart
} from "react-icons/ai";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { TurnedIn } from '@mui/icons-material';
import { Menu, MenuItem } from '@material-ui/core';

const PostCard = ({data}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  console.log(data);
  const currentUser = localStorage.getItem("username");
  const handleLike = () => {
    setIsLiked(!isLiked);
  };
   // The empty dependency array ensures that this effect runs only once when the component mounts
  
  const profile="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
  const handleSave = () => {
    setIsSaved(!isSaved);
  };
  const postId = localStorage.getItem("postId");
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(postId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  
    // Assuming data._id is the postId of the current post
    const postId = data._id;
  
    if (currentUser === data.username && postId) {
      // Only make the request if the user is the owner of the post
      fetch(`${process.env.REACT_APP_API_URL}/deletepost/${postId}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // You can handle the response as needed
        })
        .catch((error) => {
          console.error("Error deleting post:", error);
        });
    }
  };
  
  

  return (
    <>
      <div className="card1 mr-20" style={{minWidth:'550px', borderColor:'blueviolet', boxShadow:'0 0 3px blueviolet'}}>
        <div className="profile1">
          <div className="logo1">
            <img src={profile} alt="profile" className="profile-img"></img>
          </div>
          <div className="user-details1">
            <p>{data.username}</p>
            <p className="text-sm1">{data.description}</p>
          </div>
          <div className="detail-icon1 d-flex">
          <MoreVertIcon onClick={handleMenuClick} />
          </div>
        </div>
        <div className="text-sm1 footer2" style={{maxWidth:'500px'}}>
            {data.thought} <span style={{ color: 'blue', marginLeft: "10px"}}></span>
          </div>
        <div className="footer1">
          <div className="footer-icons">
            {isLiked ? (
              <AiFillHeart style={{ fontSize: "20px", margin: "0 10px", cursor: "pointer" }} onClick={handleLike} />
            ) : (
              <AiOutlineHeart style={{ fontSize: "20px", margin: "0 10px", cursor: "pointer" }} onClick={handleLike} />
            )}
            <AiOutlineComment style={{ fontSize: "20px", margin: "0 10px" }} />
            <AiOutlineSend style={{ fontSize: "20px", margin: "0 10px" }} />
            <div className="right1">
              {isSaved ? (
                <TurnedIn style={{ fontSize: "20px", cursor: "pointer" }} onClick={handleSave} />
              ) : (
                <TurnedInNotIcon style={{ fontSize: "20px", cursor: "pointer" }} onClick={handleSave} />
              )}
            </div>
          </div>
          <div className="text-sm1 views">10k views</div>
        </div>
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {currentUser === data.username ? (
          <MenuItem onClick={handleMenuClose}>Delete post</MenuItem>
        ) : (
          <MenuItem onClick={handleMenuClose}>Report post</MenuItem>
        )}
      </Menu>
    </>
  );
};

PostCard.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thought: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
