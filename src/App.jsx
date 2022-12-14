import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { OrbitControls, Stars } from '@react-three/drei';


function MyDonut({ rotSpeed, freqX = 1, ampX = 1, freqY = 1, ampY = 1 }) {
  const meshRef = useRef(this);

  useFrame(({clock}) => {
    if (!meshRef.current) return;
   
    const t = clock.getElapsedTime();
    meshRef.current.rotation.y = t * rotSpeed;
    meshRef.current.position.x = -Math.cos(t * freqX) * ampX;
    meshRef.current.position.y = Math.sin(t * freqY) * ampY;
  })

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1, 0.3, 20, 20]} />
      <meshStandardMaterial color={"gold"} />
      <mesh>
        <dodecahedronGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </mesh>
  )
}

function App() {
  return (
    <div className="App">
      <Canvas>
        <color attach="background" args={[0.01, 0.01, 0.01]} />
        <ambientLight intensity={1} />
        <directionalLight insensity={1} />
        <Stars />
        <MyDonut 
          rotSpeed={Math.PI * 2} 
          freqX={3}
          ampX={3} 
          freqY={3}
          ampY={1}
        />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App
