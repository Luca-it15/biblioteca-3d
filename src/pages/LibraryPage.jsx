// src/LibraryPage.jsx
import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LibraryScene from '../component/LibraryScene';
import LoadingBar from '../component/LoadingBar';
import Modal from '../component/Modal';

function LibraryPage() {
  // Stato per tenere traccia dell'informazione della modale
  const [selectedInfo, setSelectedInfo] = useState(null);
  const navigate = useNavigate();

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <Canvas 
          style={{ width: '100%', height: '100%' }} 
          camera={{ position: [0, 10, 10], fov: 50 }}
          dpr={[1, 2]}
          gl={{ antialias: true }}
       >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <LibraryScene setSelectedInfo={setSelectedInfo} />
        </Suspense>
        <OrbitControls target={[0, 2, 0]}/>
      </Canvas>
      
      <LoadingBar />

      <Button
        variant="contained"
        color="primary"
        style={{ position: 'absolute', top: 20, left: 20, zIndex: 10 }}
        onClick={() => navigate(-1)}
      >
        Come Back
      </Button>
      
      {selectedInfo && (
        <Modal 
          info={selectedInfo} 
          onClose={() => setSelectedInfo(null)} 
        />
      )}
    </div>
  );
}

export default LibraryPage;
