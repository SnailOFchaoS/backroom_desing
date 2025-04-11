import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import Model from './components/Model';
import { sceneGltf } from './assets/models';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Canvas className='canvas-style' shadows camera={{ position: [5, 5, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2.5, 8, 5]} intensity={1.5} castShadow shadow-mapSize={1024} />
      <Suspense fallback={null}>
        <Model url={sceneGltf} scale={0.1} />
      </Suspense>
      <Environment preset="sunset" background />
      <ContactShadows position-y={-0.8} opacity={0.25} blur={1} far={2} resolution={512} color="#1e2027" />
      <OrbitControls />
    </Canvas>
    </div>
  );
}

export default App;