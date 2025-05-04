import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className="xs:w-[320px] w-full h-[500px]"
  >
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full gold-gradient p-[2px] rounded-[20px] shadow-card project-card"
    >
      <div
        className="bg-[#0A0A0A] rounded-[20px] py-5 px-6 h-[480px] flex justify-evenly items-center flex-col project-card-content"
      >
        <div className="w-full h-[200px] overflow-hidden rounded-lg mb-4 shadow-xl relative">
          <img
            src={icon}
            alt={title}
            className="project-card-image transition-all duration-500 hover:scale-110 hover:brightness-110"
            loading="lazy"
          />
        </div>

        <div className="w-full flex flex-col h-[200px]">
          <h3 className="text-white text-[22px] font-bold text-center mt-2">{title}</h3>
          <p className="mt-4 text-secondary text-[14px] text-center project-card-description">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Unsere Luxusfahrzeuge</p>
        <h2 className={`${styles.sectionHeadText}`} style={{ color: '#D4AF37' }}>Fuhrpark</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Entdecken Sie unsere exklusive Fahrzeugflotte für Ihren Premium-Chauffeurservice. Wir bieten Ihnen
        eine sorgfältig ausgewählte Auswahl an Luxusfahrzeugen, die höchsten Ansprüchen an Komfort, Sicherheit
        und Eleganz gerecht werden. Alle Fahrzeuge werden regelmäßig gewartet und sind in makellosem Zustand.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7 justify-center items-stretch">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'fuhrpark');

export default WrappedAbout;
