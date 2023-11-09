import { Box } from "@mui/material";
import { Navbar } from "../components/Navbar/Navbar";
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
      alignItems="center"
      justifyContent="space-between"
      as="main"
      px={5}
      py={3}
      width={1}
      mt={10}
      bg="muted"> 
        <h1>Nigga marda nigga marda</h1>
      </Box>
    </Box>
  );
};

export default HomePage;
