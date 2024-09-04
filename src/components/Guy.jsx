/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/models/guy.glb -o src/components/Guy.jsx -k -K -r public 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Guy(props) {
  const { nodes, materials } = useGLTF('/models/guy.glb')
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh name="polySurface11_polySurface12" geometry={nodes.polySurface11_polySurface12.geometry} material={materials.initialShadingGroup} />
        <mesh name="polySurface11_polySurface12_1" geometry={nodes.polySurface11_polySurface12_1.geometry} material={materials.initialShadingGroup} />
        <mesh name="polySurface13_polySurface14" geometry={nodes.polySurface13_polySurface14.geometry} material={materials.initialShadingGroup} />
        <mesh name="polySurface13_polySurface14_1" geometry={nodes.polySurface13_polySurface14_1.geometry} material={materials.initialShadingGroup} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/guy.glb')
