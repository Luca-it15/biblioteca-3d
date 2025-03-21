import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import LibraryScene from './component/LibraryScene';

function App() {
  const [selectedInfo, setSelectedInfo] = useState(null);

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 2, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <LibraryScene setSelectedInfo={setSelectedInfo} />
        <OrbitControls />
      </Canvas>
      {selectedInfo && <Modal info={selectedInfo} onClose={() => setSelectedInfo(null)} />}
    </div>
  );
}

export default App;
