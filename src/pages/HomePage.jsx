import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import backgroundImage from '/img/home.png';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
         <Box
            sx={{
             width: '100%',
             maxWidth: { xs: '90%', sm: '80%', md: '500px' },
             backgroundColor: 'rgba(255, 255, 255, 0.85)',
             p: 4,
             borderRadius: 2,
             mx: 'auto',
            }}
            >
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            3D LIBRARY
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Browse thousands of free 3D models
          </Typography>
          <Button variant="contained" size="large" onClick={() => navigate('/library')}>
            Browse 3D Models
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default HomePage;
