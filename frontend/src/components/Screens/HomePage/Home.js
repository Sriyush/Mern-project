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
    display="flex"
    flexDirection="row"
    sx={{
      '@media screen and (max-width: 1040px)': {
        flexDirection: 'column',
      },
    }}
    >
      <Navbar toggleTheme={toggleTheme} />
      <Box display="flex"
      flexDirection="column"
      alignItems="flex-start"
      as="main"
      px={5}
      py={3}
      width={1}
      mt={10}
      bg="muted"> 
        <UserCard/>
      </Box>
      <Box
      flexDirection="column"
      mr={70}
      mt={20}
      alignItems="center"
      >
        {/* <UserCard/> */}
        <PostCard/>
      </Box>
    </Box>
  );
};

export default HomePage;
