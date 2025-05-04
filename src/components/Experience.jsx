import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "transparent",
      color: "#fff",
      boxShadow: "none",
      padding: 0,
      marginBottom: "2rem"
    }}
    contentArrowStyle={{ display: "none" }}
    date={experience.date}
    iconStyle={{
      background: experience.iconBg,
      boxShadow: "0 0 0 4px #D4AF37, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)"
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div className="gold-gradient p-[2px] rounded-[20px] shadow-card">
      <div className="bg-[#0A0A0A] rounded-[20px] py-5 px-6 min-h-[280px] flex flex-col">
        <div className="mb-4">
          <h3 className="text-white text-[22px] font-bold">{experience.title}</h3>
          <p className="text-secondary text-[16px] font-semibold mt-1">
            {experience.company_name}
          </p>
        </div>

        <ul className="mt-2 list-disc ml-5 space-y-2 flex-grow">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        Unsere Dienstleistungen
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`} style={{ color: '#D4AF37' }}>Services</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline lineColor="#D4AF37">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Experience, "services");
