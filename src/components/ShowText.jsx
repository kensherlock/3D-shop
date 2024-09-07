import React, { useRef, useEffect } from 'react'
import { CameraControls, OrbitControls, Text, MeshReflectorMaterial, Environment, useFont } from '@react-three/drei'
import Guy from './Guy';
import { currentPageAtom} from './UI';
import { useAtom } from 'jotai';

function ShowText() {

  const controls = useRef();

  const meshFitCarmeraHome = useRef();

  const meshFitCarmeraGuy = useRef();

  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  const intro = async () => {
    controls.current.dolly(-20);
    controls.current.smoothTime = 1.6;
    setTimeout(() => {
      setCurrentPage("home");
    }, 1200);
    fitCamera();
  }

  const fitCamera = async () => {
    if (currentPage === "guy") {
      controls.current.fitToBox(meshFitCarmeraGuy.current, true);
    }else if (currentPage === "home") {
      controls.current.fitToBox(meshFitCarmeraHome.current, true);
    }
  }

  useEffect(() => {
    intro();
  }, [])

  useEffect(() => {
    fitCamera();
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, [currentPage]);

  return (
    <>
      <CameraControls ref={controls} />
      <mesh ref={meshFitCarmeraHome} position-y={0} position-z={2} visible={false}>
          <boxGeometry args={[2, 1, 2]} />
          <meshBasicMaterial color='red' transparent opacity={0.5} />
      </mesh>
      <Text
        font='fonts/Poppins-Black.ttf'
        position-z={1}
        lineHeight={0.8}
        textAlign="center"
        fontSize={0.8}
        anchorY={"bottom"}>
        Guy
        <meshBasicMaterial color='red' />
      </Text>
      <group position={[0, -0.48, -20]}>
        <Guy scale={0.1}  position={[0, 0, 0]} />
        <mesh ref={meshFitCarmeraGuy} visible={false} position-y={1} position-z={2}>
          <boxGeometry args={[2, 1, 2]} />
          <meshBasicMaterial color='red' transparent opacity={0.5} />
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

useFont.preload('fonts/Poppins-Black.ttf');

export default ShowText
