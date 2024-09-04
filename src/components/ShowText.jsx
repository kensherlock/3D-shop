import React from 'react'
import { OrbitControls, Text } from '@react-three/drei'

function ShowText() {
  return (
    <>
        <OrbitControls />
        <Text font='fonts/Poppins-Black.ttf'>
            Guy
            <meshBasicMaterial color='red' />
        </Text>
    </>
  )
}

export default ShowText
