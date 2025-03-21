// src/ClickableCard3D.jsx
import React from 'react';
import { Text } from '@react-three/drei';


const ClickableCard = ({ position, title, description,  onClick }) => {
  return (
    <mesh position={position} onClick={onClick}>
      {/* Piano che rappresenta la card */}
      <planeGeometry args={[1, 1.5]} />
      <meshStandardMaterial color="#ffffff" opacity={0.9} transparent />

      {/* Testo 3D per il titolo */}
      <Text
        position={[0, 0, 0.01]} // leggermente davanti al piano per evitare conflitti di z-buffer
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
      <Text
          position={[0, -0.5, 0.01]} // leggermente davanti al piano per evitare conflitti di z-buffer
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="bottom"
        > 
      {description}
      </Text>
    </mesh>
  );
};

export default ClickableCard;
