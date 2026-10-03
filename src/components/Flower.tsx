import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function Flower() {
  const { scene } = useGLTF("/models/flower.glb");

  useEffect(() => {
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;

        if (object.material instanceof THREE.MeshStandardMaterial) {
          object.material.roughness = 0.7;
          object.material.metalness = 0;
        }
      }
    });
  }, [scene]);

  return (
    <group>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/flower.glb");