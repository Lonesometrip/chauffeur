import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { logo } from "../../assets"; // Import logo from assets index

const LogoModel = () => {
  const meshRef = useRef();
  const frontRef = useRef();
  const backRef = useRef();
  // Use the imported logo instead of direct path
  const texture = useTexture(logo);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005; // Slower rotation for a more elegant effect
    }
  });

  return (
    <group ref={meshRef}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={0.8} />

      {/* Front side */}
      <mesh ref={frontRef} position={[0, 0, 0.01]}>
        <circleGeometry args={[1, 32]} />
        <meshStandardMaterial
          map={texture}
          metalness={0.5}
          roughness={0.2}
          side={0} // THREE.FrontSide
        />
      </mesh>

      {/* Back side - rotated 180 degrees to show the same texture */}
      <mesh ref={backRef} rotation={[0, Math.PI, 0]} position={[0, 0, -0.01]}>
        <circleGeometry args={[1, 32]} />
        <meshStandardMaterial
          map={texture}
          metalness={0.5}
          roughness={0.2}
          side={0} // THREE.FrontSide
        />
      </mesh>
    </group>
  );
};

const Logo3DCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <LogoModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Logo3DCanvas;
