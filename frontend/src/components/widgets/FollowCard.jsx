// FollowCard.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes for prop type validation
import "./../../index.css";

const FollowCard = ({ avatarUrl, title, subtitle, posts, followers, following, description }) => {
  const [follow, setFollow] = useState("Follow")
  const [color, setColor] = useState("#6F38C5");
  const [isFollowing , setIsfollowing] = useState(0)

  const handleFollow = ()=>{
    if(isFollowing === 0){
      setFollow("Following");
      setColor("blue");
      setIsfollowing(1)
    }else{
      setFollow("Follow");
      setColor("#6F38C5");
      setIsfollowing(0);
    }

  }
  return (
    <>
      <div className="cardStyle1">
        <div>
          <img src={avatarUrl} alt="avatar" className="img" />
        </div>
        <div id="title">{title}</div>
        <div id="subtitle">@{subtitle}</div>
        <div id="stats">
          <div className="posts">
            <div className="stat-num">{posts}</div>
            <div className="stat-type">Thoughts</div>
          </div>
          <div className="followers">
            <div className="stat-num">{followers}</div>
            <div className="stat-type">followers</div>
          </div>
          <div className="following">
            <div className="stat-num">{following}</div>
            <div className="stat-type">following</div>
          </div>
        </div>
        <div id="actions">{description}</div>
        <div>
          <button
            style={{
              backgroundColor: color,
              borderRadius: "10px",
              padding: "8px 16px",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={handleFollow}
          >
            {follow}
          </button>
        </div>
      </div>
    </>
  );
};

FollowCard.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  posts: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default FollowCard;
