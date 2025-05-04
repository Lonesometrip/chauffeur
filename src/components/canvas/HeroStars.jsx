import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import "../../index.css";

const NUM_STARS = 2000; // Increased number of stars for better visibility

const HeroStars = () => {
  const ref = useRef({
    rotation: { x: 0, y: 0, z: Math.PI / 4 },
  });

  const sphere = random.inSphere(new Float32Array(NUM_STARS * 3), { radius: 2.0 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#D4AF37"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const HeroStarsCanvas = () => (
  <div className="hero-stars-container">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <HeroStars />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default HeroStarsCanvas;
