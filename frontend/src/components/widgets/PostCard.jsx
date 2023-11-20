import React, { useState, useEffect } from 'react';
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
import axios from 'axios';

const PostCard = () => {

  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getthoughts')
      .then((response) => {
        setThoughts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching thoughts:", error);
      });
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  const profile="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <>
    {thoughts.map((thought) => (
      <div key={thought._id} className="card1">
        <div className="profile1">
          <div className="logo1">
            <img src={profile} alt="profile" className="profile-img"></img>
          </div>
          <div className="user-details1">
            <p>{thought.username}</p>
            <p className="text-sm1">test</p>
          </div>
          <div className="detail-icon1 d-flex">
            <MoreVertIcon />
          </div>
        </div>
        <div className="text-sm1 footer2">
          {thought.thought} <span style={{ color: 'blue', marginLeft: "10px" }}>#test</span>
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
    ))}
  </>
  );
};

PostCard.propTypes = {
  data: PropTypes.shape({
    profile: PropTypes.string.isRequired
  }).isRequired,
};

export default PostCard;
