// Users.js
import React, { useState } from 'react';
import SearchBar from '../widgets/Search';
import { Box } from "@mui/material";
import { Navbar } from '../Navbar/Navbar';
import FollowCard from '../widgets/FollowCard';
import userdata from '../widgets/userdata.json'
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
        justifyContent="space-between"
        as="main"
        px={5}
        py={3}
        width={1}
        mt={10}
        bg="muted"
      >
        <SearchBar onSearch={handleSearch} />
      </Box>
      <Box>
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
      >
        {userdata.map((user, index) => (
          <FollowCard key={index} {...user} />
        ))}
      </Box>
    </Box>
  );
};

export default Users;
