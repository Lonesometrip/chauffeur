import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="xs:w-[320px] w-full h-[500px]"
      >
        <motion.div className="w-full gold-gradient p-[2px] rounded-[20px] shadow-card project-card">
          <div className="bg-[#0A0A0A] rounded-[20px] py-5 px-6 h-[480px] flex justify-evenly items-center flex-col project-card-content">
            <div className="w-full h-[200px] overflow-hidden rounded-lg mb-4 shadow-xl relative">
              <img
                src={image}
                alt={name}
                className="project-card-image transition-all duration-500 hover:scale-110 hover:brightness-110"
                loading="lazy"
              />
              <div className="absolute top-0 right-0 m-3">
                <div
                  onClick={() => window.open(source_code_link, "_self")}
                  className="gold-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-md"
                >
                  <span className="text-black font-bold">+</span>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col h-[200px]">
              <h3 className="text-white text-[22px] font-bold text-center mt-2">{name}</h3>
              <p className="mt-2 text-secondary text-[14px] h-[100px] project-card-description">{description}</p>
              <div className="mt-auto pt-4 flex flex-wrap gap-2 justify-center">
                {tags.map((tag) => (
                  <span key={tag.name} className={`text-[14px] ${tag.color} px-3 py-1 rounded-full bg-[#0A0A0A] border border-[#333]`}>
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Vielfältige Reiseerlebnisse</p>
        <h2 className={`${styles.sectionHeadText}`} style={{ color: '#D4AF37' }}>Tourismus</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Erleben Sie vielfältige Tourismus-Angebote mit unserem Premium-Chauffeurservice. Von exklusiven
          Shopping-Touren und Freizeitpark-Besuchen bis hin zu Städtereisen in Europa, Bauernhof-Erlebnissen
          und medizinischen Reisen - wir sorgen für Ihren Komfort und Ihre Sicherheit.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center items-stretch">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "tourismus");
