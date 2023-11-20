import { useEffect, useState } from "react";
// import "./../../index.css";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineEdit,
} from "react-icons/ai";
import axios from "axios";

const UserCard = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    description: "",
    twitter: "",
    instagram: "", // Update property name to "instagram"
  });


  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      // Fetch user data using the stored user ID
      axios
        .get(`http://localhost:3001/getuserdata/${userId}`)
        .then((response) => {
          setUserData(response.data);
          // Initialize editedData with current data
          setEditedData({
            description: response.data?.description || "",
            twitter: response.data?.twitter || "",
            instagram: response.data?.instagram || "",
          });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Make a request to update user information
    axios
      .put(`http://localhost:3001/updateuserinfo/${userData._id}`, editedData)
      .then((response) => {
        setUserData(response.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating user info:", error);
      });
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Reset editedData to the current user data on cancel
    setEditedData({
      description: userData?.description || "",
      twitter: userData?.twitter || "",
      instagram: userData?.instagram || "",
    });
  };

  const url =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

  return (
    <div className="cardStyle" style={{ width: "300px", height: "500px", marginTop:"25px"}}>
      <div className="editIcon" onClick={handleEditClick}>
        <AiOutlineEdit style={{ fontSize: "20px", cursor: "pointer" }} />
      </div>
      <div>
        <img src={url} alt="avatar" className="img" />
      </div>
      <div id="title">{userData?.name}</div>
      <div id="subtitle">@{userData?.username}</div>
      <div id="stats">{/* ... (unchanged) */}</div>
      <p className=" text-blue-500 font-bold ">One liner</p>
      <div id="actions">
        {isEditing ? (
          // Display input fields for editing
          <div>
            <textarea
              placeholder="Description"
              value={editedData.description}
              onChange={(e) =>
                setEditedData({ ...editedData, description: e.target.value })
              }
              className="border-2 rounded-xl w-full p-1"
            />
            <p className=" text-blue-500 font-bold ">Twitter Link</p>
            <input
              type="text"
              placeholder="Twitter link"
              value={editedData.twitter}
              onChange={(e) =>
                setEditedData({ ...editedData, twitter: e.target.value })
              }
              className="border-2 rounded-xl w-full p-1 m-0.5"
            />
            <p className=" text-blue-500 font-bold">Instagram Link</p>
            <input
              type="text"
              placeholder="Instagram link"
              value={editedData.instagram}
              onChange={(e) =>
                setEditedData({ ...editedData, instagram: e.target.value })
              }
              className="border-2 rounded-xl w-full p-1 m-0.5"
            />
          </div>
        ) : (
          // Display user description when not in edit mode
          userData?.description
        )}
      </div>
      {/* Show clickable Twitter and Instagram icons after saving */}
      {!isEditing && (
        <div>
          <div class="flex items-center">
            <div class="flex-grow border-2 border-gray-700 mx-3"></div>
            <span class="text-lg font-bold text-blue-500 ">Other Handles</span>
            <div class="flex-grow border-2 border-gray-700 mx-3"></div>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <a
              href={userData?.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "5px",
                }}
              >
                <AiOutlineTwitter
                  style={{ fontSize: "20px", marginRight: "5px" }}
                />
                Twitter
              </span>
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a
              href={userData?.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "5px",
                }}
              >
                <AiFillInstagram
                  style={{ fontSize: "20px", marginRight: "5px" }}
                />
                Instagram
              </span>
            </a>
          </div>
        </div>
      )}

      {isEditing && (
        <div>
          <button
            onClick={handleSaveClick}
            className="border-2 m-1 bg-purple-600 text-white w-32 rounded-xl"
          >
            Save
          </button>
          <button
            onClick={handleCancelClick}
            className="border-2 m-1 bg-purple-600 text-white w-32 rounded-xl"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default UserCard;
