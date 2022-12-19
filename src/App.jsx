import { Canvas } from '@react-three/fiber'
import { Html, Stars } from '@react-three/drei';
import './App.css'


function App() {
  return (
    <div className="App">
      <header>

      </header>
      <Canvas>
        <color attach="background" args={[0.01, 0.01, 0.01]} />
        <ambientLight intensity={1} />
        <directionalLight insensity={1} />
        <Stars />
      </Canvas>
      <div className='sidebar'>
        <ul>
          <li><a href="">HOME</a></li>
          <li><a href="">PROJECTS</a></li>
          <li><a href="">EXPERIENCE</a></li>
          <li><a href="">CONTACT</a></li>
        </ul>
      </div>
      <footer>

      </footer>
    </div>
  )
}

export default App
