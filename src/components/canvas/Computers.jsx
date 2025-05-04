import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const ComputerModel = ({ isMobile }) => {
  // Use import.meta.env.BASE_URL to get the correct base path in production
  const modelPath = import.meta.env.BASE_URL + "car1/scene.gltf";
  const { scene } = useGLTF(modelPath);

  // Make the model interactive
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="#111122" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.25}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[20, 30, 10]}
        angle={0.25}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[0, 10, 10]} intensity={3} />
      <ambientLight intensity={1.2} />
      <primitive
        object={scene}
        scale={isMobile ? 1.5 : 2.0}
        position={isMobile ? [0, -2.7, 0] : [0, -2.4, 0]} /* Moved car down by additional 2cm */
        rotation={[0, Math.PI / 4, 0]}
        castShadow
        receiveShadow
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="car-canvas-container">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [15, 1, 15], fov: 30 }} /* Lowered camera height to match car's new position (4cm down) */
        gl={{ preserveDrawingBuffer: true }}
        style={{ position: 'relative', zIndex: 5, pointerEvents: 'auto' }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={true}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={0.5}
            target={[0, -2.4, 0]} /* Updated target to match the car's new position (additional 2cm down) */
            maxPolarAngle={Math.PI / 1.8} /* Adjusted to prevent seeing below the car */
            minPolarAngle={Math.PI / 4}
            makeDefault
            domElement={document.body} /* Use document.body as the DOM element for events */
          />
          <ComputerModel isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
