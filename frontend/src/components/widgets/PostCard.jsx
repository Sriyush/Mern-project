import React from 'react';
import './style.css';
import {
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlinePaperClip
} from "react-icons/ai";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
const PostCard = () => {
  return (
    <>
      <div className="card1">
        <div className="profile1">
          <div className="logo1"></div>
          <div className="user-details1">
            <p  >username</p>
            <p className="text-sm1">placeholder</p>
          </div>
          <div className="detail-icon1 d-flex">
            <MoreVertIcon/>
          </div>
        </div>
        <div className="img1"></div>
        <div className="footer1">
          <div className="footer-icons">
            <AiOutlineHeart style={{ fontSize: "20px", margin: "0 10px" }} />
            <AiOutlineComment style={{ fontSize: "20px", margin: "0 10px" }} />
            <AiOutlinePaperClip style={{ fontSize: "20px", margin: "0 10px" }} />
            <div className="right1">
            <TurnedInNotIcon/>
            </div>
          </div>
          <div className="text-sm1 views">10,328 views</div>
          <div className="text-sm1 footer2">
            Doggy <span style={{ color: 'blue' }}>#template</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
