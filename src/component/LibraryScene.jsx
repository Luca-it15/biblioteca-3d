// src/LibraryScene.jsx
import React from 'react';
import { useGLTF } from '@react-three/drei';
import ClickableCard from './ClickableCard';

const LibraryScene = ({ setSelectedInfo }) => {
  const { scene } = useGLTF('/model/vr_library_gltf/scene.gltf');

  return (
    <>
      <primitive object={scene} />
      <ClickableCard 
        position={[2, 1, -5]} 
        title="Libro A"
        description="Dettagli del Libro A"
        onClick={() => setSelectedInfo('Dettagli del Libro A')}
      />
      <ClickableCard 
        position={[-2, 1, -5]} 
        title="Libro B"
        description="Dettagli del Libro B"
        onClick={() => setSelectedInfo('Dettagli del Libro B')}
      />
      <ClickableCard 
        position={[0, 2, -4]} 
        title="Libro C"
        description="Dettagli del Libro C"
        onClick={() => setSelectedInfo('Dettagli del Libro C')}
      />
    </>
  );
};

export default LibraryScene;
