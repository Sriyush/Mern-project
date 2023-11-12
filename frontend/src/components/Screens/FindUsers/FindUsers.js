// Users.js
import React, { useState } from 'react';
import SearchBar from '../../widgets/Search';
import { Box } from "@mui/material";
import { Navbar } from '../../widgets/Navbar/Navbar';
import FollowCard from '../../widgets/FollowCard';
import userdata from '../../widgets/userdata.json';
import './FindUsers.css'
const Users = ({ darkTheme, setDarkTheme }) => {
  const [setSearchTerm] = useState('');
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("dark", darkTheme);
  };

  return (
    <Box>
      <Navbar toggleTheme={toggleTheme} />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        // justifyContent="space-between"
        as="main"
        px={5}
        py={3}
        width={1}
        mt={10}
        bg="muted"
      >
        <SearchBar />
      </Box>
      <Box
      className="heading"
      >
      <h1>Top Users</h1>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        as="main"
        px={5}
        py={3}
        width={1}
        mt={5} 
        bg="muted"
        sx={{
          '@media screen and (max-width: 1040px)': {
            alignItems: "center",
            flexDirection: "column"
          },
        }}
      >
        {userdata.map((user, index) => (
          <Box key={index} className="cards"> 
            <FollowCard {...user} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Users;
