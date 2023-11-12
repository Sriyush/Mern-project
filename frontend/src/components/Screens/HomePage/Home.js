import { Box } from "@mui/material";

import UserCard from "../../widgets/UserCard";
import { Navbar } from "../../widgets/Navbar/Navbar";
const HomePage = ({ darkTheme, setDarkTheme }) => {
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("dark", darkTheme);
  };
  return (
    <Box>
      <Navbar toggleTheme={toggleTheme} />
      <Box display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="space-between"
      as="main"
      px={5}
      py={3}
      width={1}
      mt={10}
      bg="muted"> 
        <UserCard/>
      </Box>
      <Box>
        {/* <InstagramCard/> */}
      </Box>
    </Box>
  );
};

export default HomePage;
