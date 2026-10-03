import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  Sparkles,
  Center,
  Bounds,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Flower from "./Flower";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 6],
        fov: 35,
      }}
      dpr={[1, 2]}
      shadows
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      {/* Soft ambient light */}
      <ambientLight intensity={1.4} />

      {/* Main soft light */}
      <directionalLight
        position={[3, 5, 4]}
        intensity={2.2}
        castShadow
      />

      {/* Rim light */}
      <pointLight
        position={[-3, 2, -3]}
        intensity={12}
        distance={8}
      />

      <pointLight
        position={[3, -1, 2]}
        intensity={5}
        distance={6}
      />

      {/* Environment */}
      <Environment preset="studio" />

      {/* Tiny floating particles */}
      <Sparkles
        count={70}
        scale={[5, 5, 5]}
        size={1.3}
        speed={0.25}
        opacity={0.45}
      />

      {/* Flower */}
      <Bounds fit clip observe margin={1.25}>
        <Float
          speed={1}
          rotationIntensity={0.12}
          floatIntensity={0.18}
        >
          <Center>
            <Flower />
          </Center>
        </Float>
      </Bounds>

      {/* Ground shadow */}
      <ContactShadows
        position={[0, -1.8, 0]}
        opacity={0.35}
        scale={8}
        blur={2.5}
        far={4}
      />

      {/* Mouse interaction */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.05}
        autoRotate
        autoRotateSpeed={0.35}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
}