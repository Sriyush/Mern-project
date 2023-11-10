import { Box } from "@mui/material";
import { Navbar } from "../Navbar/Navbar";
import UserCard from "../../UserCard";
const ProfilePage = ({ darkTheme, setDarkTheme }) => {
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
    </Box>
  );
};

export default ProfilePage;
