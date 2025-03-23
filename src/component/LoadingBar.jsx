// src/LoadingBar.jsx
import React from 'react';
import { useProgress } from '@react-three/drei';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const LoadingBar = () => {
  const { progress } = useProgress();

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 9999, // Assicurati che sia in cima agli altri elementi
        backgroundColor: 'rgba(0,0,0,0.2)'
      }}
    >
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default LoadingBar;
