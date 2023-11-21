// Users.js
import React, { useState, useEffect } from 'react';
import SearchBar from '../../widgets/Search';
import { Box } from "@mui/material";
import { Navbar } from '../../widgets/Navbar/Navbar';
import FollowCard from '../../widgets/FollowCard';
// import userdata from '../../widgets/userdata.json';
import axios from 'axios';
import './FindUsers.css'


const Users = ({ darkTheme, setDarkTheme }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/getallusers`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching all users:", error);
      });
  }, []);
  const handleSearch = (term) => {
    setSearchTerm(term);
    // Filter users based on the search term
    const filtered = users.filter(user => user.name.toLowerCase().includes(term.toLowerCase()));
    setFilteredUsers(filtered);
  };
  const displayUsers = searchTerm ? filteredUsers : users;
  

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
        <SearchBar onSearch={handleSearch}/>
      </Box>
      <Box
      className="heading"
      >
      <h1 className="text-4xl text-850 font-bold text-center mt-4" >Top Users</h1>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        flexWrap="wrap"
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
        {users.map((user) => (
          <Box
            key={user._id}
            width={{ xs: "100%", sm: "48%", md: "31%", lg: "23%", xl: "19%" }} // Adjust width based on screen size
            mb={4} // Add margin between cards
          >
            <FollowCard
              avatarUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              title={user.name}
              subtitle={user.username || 'User'}
              posts={user.postCount}
              followers="1000"
              following="100k"
              description={user.description || 'No Description'}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Users;
