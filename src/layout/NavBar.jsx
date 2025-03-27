import React, { useState } from 'react';
import {
  AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Library', path: '/library' },
    { label: 'Catalog', path: '/catalog' },
    { label: 'About', path: '/about' }
  ];

  const handleNav = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            3D LIBRARY
          </Typography>
          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ width: 200, p: 2 }}>
                  {menuItems.map((item) => (
                    <Button
                      key={item.label}
                      fullWidth
                      onClick={() => handleNav(item.path)}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              </Drawer>
            </>
          ) : (
            <Box>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  onClick={() => handleNav(item.path)}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
