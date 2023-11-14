import { Box } from "@mui/material";
import { Navbar } from "../../widgets/Navbar/Navbar";
import UserCard from "../../widgets/UserCard";
import PostCard from "../../widgets/PostCard";
const ProfilePage = ({ darkTheme, setDarkTheme }) => {
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("dark", darkTheme);
  };
  const postData = {
    username: "Ayush Srivastava",
    placeholder: "israel",
    imageUrl: "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/11/photo-metadata-1.png",
    views: 1000,
    caption: "Doggy nigga",
    hashtag: "#DeezNuts",
    profile: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };
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
        },
      }}
      > 
        <UserCard/>
        <Box display="flex"
      flexDirection="column "
      alignItems="center"
      ml={7}
      sx={{
        '@media screen and (max-width: 1040px)': {
          ml: 0,
          mr: 0,
        },
      }}
      >
        <h1 style={{marginBottom:"10px" , marginTop:"10px"}}>Your Posts</h1>
        <PostCard data={postData}/>
      </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
