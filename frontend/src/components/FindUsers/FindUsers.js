// Users.js
import React, { useState } from 'react';
import SearchBar from '../widgets/Search';
import { Box } from "@mui/material";
import { Navbar } from '../Navbar/Navbar';
import FollowCard from '../widgets/FollowCard';

const Users = ({ darkTheme, setDarkTheme }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("dark", darkTheme);
  };

  const userData1 = {
    avatarUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    title: "Ayush Srivastava",
    subtitle: "@Sriyush",
    posts: 5,
    followers: 1000,
    following: 100000,
    description: "A guy who is just a Guy",
  };

  const userData2 = {
    avatarUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    title: "Shiv Nigger",
    subtitle: "@Shivrand",
    posts: 5,
    followers: 1000,
    following: 100000,
    description: "A guy who is just a Gay",
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
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        as="main"
        px={5}
        py={3}
        width={1}
        mt={10}
        bg="muted"
      >
        <FollowCard {...userData1} />
        <FollowCard {...userData2} />
      </Box>
    </Box>
  );
};

export default Users;
