import { useGLTF } from "@react-three/drei";

export default function Flower() {
  const { scene } = useGLTF("/models/flower.glb");

  return <primitive object={scene} />;
}

useGLTF.preload("/models/flower.glb");