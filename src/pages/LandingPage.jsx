// src/LandingPage.jsx
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '20vh' }}>
      <Typography variant="h3" gutterBottom>
        Benvenuto in Library
      </Typography>
      <Box mt={4}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          onClick={() => navigate('/library')}
          style={{ marginRight: 16 }}
        >
          Entra nella libreria
        </Button>
        <Button 
          variant="outlined" 
          color="primary" 
          size="large" 
          onClick={() => navigate('/catalog')}
        >
          Sfoglia il catalogo
        </Button>
      </Box>
    </Container>
  );
}

export default LandingPage;
