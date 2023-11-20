import { Box, useMediaQuery } from "@mui/material";
import postdata from './../../widgets/postdata.json'
import UserCard from "../../widgets/UserCard";
import { Navbar } from "../../widgets/Navbar/Navbar";
import PostCard from "../../widgets/PostCard";
import Postbox from "../../widgets/Postbox/Postbox";


const HomePage = ({ darkTheme, setDarkTheme }) => {
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("dark", darkTheme);
  };
  const isMobile = useMediaQuery('(max-width: 1040px)')
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
      flexDirection="row"
      alignItems="flex-start"
      as="main"
      px={5}
      py={3}
      mt={10}
      bg="muted"> 
        {!isMobile && <UserCard/>}
        <Box
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
        <Postbox/>
        <PostCard/>
      </Box>
      </Box>
      
    </Box>
  );
};

export default HomePage;
