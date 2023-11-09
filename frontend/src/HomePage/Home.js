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
      <Box mt={10}> 
        <h1>Nigga marda nigga marda</h1>
      </Box>
    </Box>
  );
};

export default HomePage;
