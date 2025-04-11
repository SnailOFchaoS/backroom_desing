import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber'


function Model({ url, ...props }) {
  const gltf = useLoader(GLTFLoader, url)

  return <primitive object={gltf.scene} {...props} dispose={null} />
}


export default Model;