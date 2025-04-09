import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import modelPath from "../../../models/chair.gltf"

const Chair = () => {
  const [model, setModel] = useState(null);
  const chairRef = useRef();

  // ПРАВИЛЬНЫЙ ПУТЬ:
  const gltf = useLoader(GLTFLoader, modelPath);

  useEffect(() => {
    if (gltf) {
      setModel(gltf.scene);
    }
  }, [gltf]);

  useFrame((state, delta) => {
    if (chairRef.current) {
      chairRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={chairRef} dispose={null}>
      {model && <primitive object={model} />}
    </group>
  );
};

export default Chair;