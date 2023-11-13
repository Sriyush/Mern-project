import { Box } from "@mui/material";

import UserCard from "../../widgets/UserCard";
import { Navbar } from "../../widgets/Navbar/Navbar";
import PostCard from "../../widgets/PostCard";
const HomePage = ({ darkTheme, setDarkTheme }) => {
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("dark", darkTheme);
  };
  return (
    <Box
    flexDirection="row"
    sx={{
      '@media screen and (max-width: 1040px)': {
        flexDirection: 'column',
      },
    }}
    >
      <Navbar toggleTheme={toggleTheme} />
      <Box display="flex"
      // flexDirection="column"
      alignItems="flex-start"
      as="main"
      px={5}
      py={3}
      mt={10}
      bg="muted"> 
        <UserCard/>
        <Box
      flexDirection="column "
      alignItems="center"
      ml={7}
      >
        {/* <UserCard/> */}
        <PostCard mb="10px"/>
        <PostCard/>
      </Box>
      </Box>
      
    </Box>
  );
};

export default HomePage;
