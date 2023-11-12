import React from 'react';
import './style.css'
const PostCard = () => {
  return (
    <>
      <div className="card1">
        <div className="profile1">
          <div className="logo1"></div>
          <div className="user-details1">
            <p >username</p>
            <p className="text-sm1">placeholder</p>
          </div>
          <div className="detail-icon1 d-flex">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="img1"></div>
        <div className="footer1">
          <div className="footer-icons">
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <i className="far fa-paper-plane"></i>
            <div className="right1">
              <i className="far fa-bookmark"></i>
            </div>
          </div>
          <div className="text-sm1 views">10,328 views</div>
          <div className="text-sm1 footer2">
            Username instagram template <span style={{ color: 'blue' }}>#template</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
