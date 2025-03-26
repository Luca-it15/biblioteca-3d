import React from 'react';
import { Box } from '@mui/material';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <Box
    sx={{
      minHeight: '100vh',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
