import React, { useRef, useEffect } from 'react'
import { CameraControls, OrbitControls, Text, MeshReflectorMaterial, Environment } from '@react-three/drei'
import EnterButton from './EnterButton'

function ShowText() {

  const controls = useRef();

  const meshFitCarmeraStore = useRef();

  const intro = async () => {
    controls.current.dolly(-20);
    controls.current.smoothTime = 1.6;
    controls.current.dolly(20, true);
  }

  useEffect (() => {
    intro();
  }, [])

  return (
    <>
      <CameraControls ref={controls} />
      <Text 
      font='fonts/Poppins-Black.ttf'
      position-z={1}
        lineHeight={0.8}
        textAlign="center"
        fontSize={1}
        anchorY={"bottom"}>
        Guy
        <meshBasicMaterial color='red' />
      </Text>
      <group>
        <mesh ref={meshFitCarmeraStore}>
          <boxGeometry args={[2, 1, 2]} />
          <meshBasicMaterial color='red' />
        </mesh>
      </group>
      <mesh position-y={-0.48} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[100, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={10}
          roughness={1}
          depthScale={1}
          opacity={0.5}
          transparent
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#333"
          metalness={0.5}
        />
      </mesh>
      <Environment preset="sunset" />
    </>
  )
}

export default ShowText
