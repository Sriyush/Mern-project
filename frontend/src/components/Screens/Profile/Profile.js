import { Box } from "@mui/material";
import { Navbar } from "../../widgets/Navbar/Navbar";
import UserCard from "../../widgets/UserCard";
import PostCard from "../../widgets/PostCard";
import { useEffect, useState } from "react";
import axios from "axios";
const ProfilePage = ({ darkTheme, setDarkTheme }) => {
  const [userPosts, setUserPosts] = useState([]);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("dark", darkTheme);
  };

  useEffect(() => {
    const username = localStorage.getItem("username");

    if (username) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/getuserposts/${username}`)
        .then((response) => {
          console.log(response.data);
          setUserPosts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user posts:", error);
        });
    }
  }, []);

  return (
    <Box display="flex"
    flexDirection="row"
    sx={{
      '@media screen and (max-width: 1040px)': {
        flexDirection: 'column',
      },
    }}
    >
      <Navbar toggleTheme={toggleTheme} />
      <Box display="flex"
      flexDirection="row"
      alignItems="flex-start"
      as="main"
      px={5}
      py={3}
      width={1}
      mt={10}
      bg="muted"
      sx={{
        '@media screen and (max-width: 1040px)': {
          flexDirection: 'column',
          display: 'flex',
          mx:'auto'
        },
      }}
      > 
        <UserCard />
        <Box display="flex"
      flexDirection="column "
      alignItems="center"
      mx="auto"
      sx={{
        '@media screen and (max-width: 1040px)': {
          ml: 0,
          mr: 0,
        },
      }}
      >
        <h1 className="text-4xl text-850 font-bold" style={{marginBottom:"10px" , marginTop:"10px"}}>Your Posts</h1>
        {userPosts.map((postData) => (
            <PostCard key={postData._id} data={postData}/>
          ))}
      </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
