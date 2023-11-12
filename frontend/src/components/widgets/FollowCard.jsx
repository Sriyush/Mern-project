// FollowCard.js
import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes for prop type validation
import "./../../index.css";

const FollowCard = ({ avatarUrl, title, subtitle, posts, followers, following, description }) => {
  return (
    <div className="cardStyle1">
      <div>
        <img src={avatarUrl} alt="avatar" className="img" />
      </div>
      <div id="title">{title}</div>
      <div id="subtitle">{subtitle}</div>
      <div id="stats">
        <div className="posts">
          <div className="stat-num">{posts}</div>
          <div className="stat-type">Posts</div>
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
        
        <button style={{ backgroundColor: '#6F38C5', borderRadius: '10px', padding: '8px 16px', color: '#fff', cursor: 'pointer' }}>Follow</button>
      </div>
    </div>
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
