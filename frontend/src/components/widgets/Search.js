import React, { useState } from 'react';
import { InputBase, IconButton, Box } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="#f0f0f0"
      borderRadius="9px"
      gap="1rem"
      padding="0.5rem 1rem"
      height="40px"
      width="500px"
      sx={{
        '@media screen and (max-width: 1040px)': {
          width: 400  ,
          alignItems: "center"
        },
      }}
    >
      <InputBase
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
      />
      <IconButton onClick={handleSearchClick}>
        <Search />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
