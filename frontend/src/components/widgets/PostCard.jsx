import React from 'react';
import './style.css';
import PropTypes from 'prop-types'; 
import {
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineSend
} from "react-icons/ai";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

const PostCard = ({ data }) => {
  const { username, placeholder, imageUrl, views, hashtag,caption,profile } = data;

  return (
    <>
      <div className="card1">
        <div className="profile1">
          <div className="logo1">
            <img src={profile} alt="profile" className="profile-img"></img>
          </div>
          <div className="user-details1">
            <p>{username}</p>
            <p className="text-sm1">{placeholder}</p>
          </div>
          <div className="detail-icon1 d-flex">
            <MoreVertIcon/>
          </div>
        </div>
        <img src={imageUrl} alt="post" className='img1'></img>
        <div className="footer1">
          <div className="footer-icons">
            <AiOutlineHeart style={{ fontSize: "20px", margin: "0 10px" }} />
            <AiOutlineComment style={{ fontSize: "20px", margin: "0 10px" }} />
            <AiOutlineSend style={{ fontSize: "20px", margin: "0 10px" }} />
            <div className="right1">
              <TurnedInNotIcon/>
            </div>
          </div>
          <div className="text-sm1 views">{views} views</div>
          <div className="text-sm1 footer2">
            {caption} <span style={{ color: 'blue',marginLeft:"10px" }}>{hashtag}</span>
          </div>
        </div>
      </div>
    </>
  );
};

PostCard.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    hashtag: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired
  }).isRequired,
};

export default PostCard;
