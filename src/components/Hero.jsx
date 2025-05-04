import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";
import CarPreloader from "./CarPreloader";

const Hero = () => {
  // State to track if the car model is loaded
  const [isLoaded, setIsLoaded] = useState(false);

  // Listen for the 'modelLoaded' event from the ComputersCanvas component
  useEffect(() => {
    const handleModelLoaded = () => {
      setIsLoaded(true);
    };

    window.addEventListener('modelLoaded', handleModelLoaded);

    return () => {
      window.removeEventListener('modelLoaded', handleModelLoaded);
    };
  }, []);

  return (
    <section className="relative w-full h-[90vh] mx-auto">
      {/* Add the preloader component */}
      <CarPreloader />

      <div className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-20`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#D4AF37]" />
          <div className="w-1 sm:h-60 h-40 gold-gradient" />
        </div>

        <div className="hero-text-container">
          <h1 className={`${styles.heroHeadText} text-white drop-shadow-lg`}>
            <span className="text-[#D4AF37]">Premium</span> Chauffeur
          </h1>
          <div className={`${styles.heroSubText} mt-2 text-white-100 drop-shadow-md`}>
            <p>Ihr exklusiver</p>
            <Typewriter
              options={{
                strings: ["Chauffeurservice", "Flughafen Transfer", "VIP Service", "Limousinenservice", "Event Service"],
                autoStart: true,
                loop: true,
                loopCount: Infinity,
                deleteSpeed: "natural",
                pauseFor: 1000,
              }}
            />
          </div>
        </div>
      </div>

      <div className="car-model-wrapper">
        <ComputersCanvas onLoaded={() => setIsLoaded(true)} />
      </div>

      <div className="absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center z-20">
        <a href="#services" style={{ pointerEvents: 'auto' }}>
          <div className="w-[30px] h-[55px] rounded-3xl border-3 border-[#D4AF37] flex justify-center items-start p-2 bg-black bg-opacity-30">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
