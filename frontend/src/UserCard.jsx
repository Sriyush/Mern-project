import "./index.css";
const UserCard = () => {
    const url="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    return <div class="cardStyle">
        <div>
            <img src={url} alt="avatar" class="img" />
        </div>
        <div id="title">Ayush Srivastava</div>
        <div id ="subtitle">Sriyush</div>
        <div id="stats">
            <div class="stat-num">1000</div>
            <div class="stat-type">follower</div>
        </div>
        <div id ="actions">Pdf file</div>
    </div>
}
export default UserCard;