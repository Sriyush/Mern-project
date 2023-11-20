import { Box, useMediaQuery } from "@mui/material";
import UserCard from "../../widgets/UserCard";
import { Navbar } from "../../widgets/Navbar/Navbar";
import PostCard from "../../widgets/PostCard";
import Postbox from "../../widgets/Postbox/Postbox";
import axios from 'axios';
import React, { useState, useEffect } from 'react';



const HomePage = ({ darkTheme, setDarkTheme }) => {
  const [thoughts, setThoughts] = useState([]);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("dark", darkTheme);
  };
  useEffect(() => {
    axios.get('http://localhost:3001/getthoughts')
      .then((response) => {
        setThoughts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching thoughts:", error);
      });
  }, []);
  console.log(thoughts); 
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
        {thoughts.map((thought) => (
            <PostCard key={thought._id} data={thought} /> // Make sure to pass the correct prop here
          ))}
      </Box>
      </Box>
      
    </Box>
  );
};

export default HomePage;
