import React, { useRef, useState, useMemo  } from 'react'
import { Canvas } from "react-three-fiber";
import { MathUtils } from 'three';
import Chair from './Chair';
import * as THREE from 'three';

import "./index.scss"

const MainPage = () => {
  // const cubeRef = useRef();
  const [showEdges, setShowEdges] = useState(false);

  const onPointerOver = (event) => {
    console.log("Over")
    event.stopPropagation();
    setShowEdges(true);
  }

  const onPointerOut = (event) => {
    console.log("Out")
    event.stopPropagation();
    setShowEdges(false);
  }

  return(
    <div className='main-warpper'>
      <Canvas className='canvas-style' camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[2, 2, 3]} intensity={2}/>
        <Chair showEdges={showEdges}  onPointerOver={onPointerOver} onPointerOut={onPointerOut}/>
      </Canvas>
    </div>
  )
}

export default MainPage;


// const lineMaterial = useMemo(() => 
//   new THREE.LineBasicMaterial({ color: showEdges ? 0xff0000 : 0x000000 }), [showEdges]);
{/* <mesh 
          rotation={[MathUtils.degToRad(45), MathUtils.degToRad(45), 0]}
          ref={cubeRef}
          onPointerOver = {onPointerOver}
          onPointerOut = {onPointerOut}
        >
          <boxGeometry attach="geometry" args={[1, 1, 1]} />
          <meshStandardMaterial
            attach="material"
            color={"#6be092"}
          />
          <lineSegments>
            <edgesGeometry attach="geometry" args={[cubeRef.current?.geometry]} />
            <primitive attach="material" object={lineMaterial} />
          </lineSegments>
        </mesh> */}