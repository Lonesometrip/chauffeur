import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Html,
  useProgress,
  DRACOLoader
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from "three";

// Configure Draco loader for better compression
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
dracoLoader.setDecoderConfig({ type: 'js' });

const ComputerModel = ({ isMobile }) => {
  const modelRef = useRef();
  const modelPath = import.meta.env.BASE_URL + "car1/scene.gltf";

  // Use GLTF with Draco compression
  const { scene, nodes, materials } = useGLTF(modelPath, dracoLoader);

  // Add a simple rotation animation
  useFrame((state) => {
    if (modelRef.current) {
      // Very subtle rotation to give a sense of life
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.02 + Math.PI / 4;
    }
  });

  // Make the model interactive
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;

          // Optimize materials for better performance
          if (child.material) {
            child.material.envMapIntensity = 0.8;
            child.material.needsUpdate = true;
          }
        }
      });
    }
  }, [scene]);

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
        ref={modelRef}
        object={scene}
        scale={isMobile ? 1.5 : 2.0}
        position={isMobile ? [0, -2.7, 0] : [0, -2.4, 0]} /* Moved car down by additional 2cm */
        // rotation is now handled by useFrame for subtle animation
        castShadow
        receiveShadow
      />
    </mesh>
  );
};

const ComputersCanvas = ({ onLoaded }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);

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

  // Create a placeholder component to show before the model loads
  const ModelPlaceholder = () => {
    const { progress } = useProgress();

    useEffect(() => {
      if (progress === 100) {
        // Add a small delay to ensure smooth transition
        const timer = setTimeout(() => {
          setModelLoaded(true);

          // Dispatch a custom event when the model is loaded
          const event = new CustomEvent('modelLoaded');
          window.dispatchEvent(event);

          // Call the onLoaded callback if provided
          if (onLoaded) onLoaded();
        }, 500);

        return () => clearTimeout(timer);
      }
    }, [progress]);

    return <CanvasLoader />;
  };

  return (
    <div className="car-canvas-container">
      {/* Add a loading message outside the Canvas for better UX */}
      {!modelLoaded && (
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#D4AF37',
          fontSize: '14px',
          textAlign: 'center',
          zIndex: 10,
          backgroundColor: 'rgba(0,0,0,0.7)',
          padding: '5px 15px',
          borderRadius: '20px',
        }}>
          Loading luxury vehicle...
        </div>
      )}

      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 1.5]} // Reduced max DPR for better performance
        camera={{ position: [15, 1, 15], fov: 30 }}
        gl={{
          preserveDrawingBuffer: true,
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        style={{ position: 'relative', zIndex: 5, pointerEvents: 'auto' }}
        performance={{ min: 0.5 }} // Allow ThreeJS to reduce quality for performance
      >
        <Suspense fallback={<ModelPlaceholder />}>
          <OrbitControls
            enableZoom={false}
            enablePan={true}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={0.5}
            target={[0, -2.4, 0]}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 4}
            makeDefault
            domElement={document.body}
          />
          {/* Only render the model when ready for better performance */}
          <ComputerModel isMobile={isMobile} />
        </Suspense>
        {/* Only preload essential assets */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
