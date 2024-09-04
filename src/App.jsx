import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import ShowText from './components/ShowText'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
      <color attach="background" args={["#171720"]} />
      <fog attach="fog" args={["#171720", 10, 20]} />
      <ShowText />
    </Canvas>
  );
}

export default App
