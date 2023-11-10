import "./../../index.css";
import {
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
const UserCard = () => {
    const url="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    return <div class="cardStyle">
        <div>
            <img src={url} alt="avatar" class="img" />
        </div>
        <div id="title">Ayush Srivastava</div>
        <div id ="subtitle">@Sriyush</div>
        <div id="stats">
        <div class="posts">
            <div class="stat-num">5</div>
            <div class="stat-type">Posts</div>
        </div >
        <div class="followers">
            <div class="stat-num">1000</div>
            <div class="stat-type">followers</div>
        </div>
        <div class="following">
            <div class="stat-num">100 k</div>
            <div class="stat-type">following</div>
        </div>
        </div>
        <div id ="actions">A guy who is just a Guy</div>
        <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px" }} />
            
                <p style={{ margin: "0 10px" ,fontSize: "12px"}}>Other Social Handles</p>
            
                <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <a href="https://twitter.com/Sriyush1">
        <AiOutlineTwitter style={{ fontSize: "20px", margin: "0 10px" }} />
        </a>
        <a href="https://www.instagram.com/sriyush_/">
        <AiFillInstagram style={{ fontSize: "20px", margin: "0 10px" }} />
        </a>
      </div>
    </div>
}
export default UserCard;