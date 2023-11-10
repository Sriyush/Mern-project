import React from 'react';
import { InputBase, IconButton, Box } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
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
    >
      <InputBase
        placeholder="Search..."
        onChange={handleSearch}
        fullWidth
      />
      <IconButton>
        <Search />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
