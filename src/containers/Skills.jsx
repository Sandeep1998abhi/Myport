import React from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { Leaf1, Leaf2, about } from "../assets";
import { SkillCard } from "../components";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52">
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 w-full">
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">My Skills & Work Experience</p>
          <p className="text-texlight text-base tracking-wide text-justify">
          I possess comprehensive skills in frontend development, including proficiency in HTML, CSS, and JavaScript. Additionally, I've undergone specialized training as a frontend developer at Newton School, where I gained hands-on experience in building dynamic and interactive web applications using React.js
          </p>

          <p className="text-texlight text-base tracking-wide text-justify">
          Good understanding of Java programming, allowing me to develop robust and scalable Coding. This proficiency in Java equips me with the skills needed to create efficient and effective applications.
          </p>

          <p className="text-texlight text-base tracking-wide text-justify">
          terms of SCADA (Supervisory Control and Data Acquisition), I have a foundational understanding. This means I am familiar with the basic principles and functionalities of SCADA systems, demonstrating an awareness of real-time monitoring and control in industrial processes.
          </p>

          <p className="text-texlight text-base tracking-wide text-justify">
          Regarding CATIA (Computer-Aided Three-Dimensional Interactive Application), I have a basic proficiency. This enables me to engage in 3D modeling, simulation, and design activities. While not at an advanced level, my knowledge in CATIA emphasizes precision and efficiency in engineering projects.
          </p>
        </div>
        <div className="w-full flex flex-col gap-4 items-center justify-center px-8">

          <SkillCard skill={"HTML 5"} percentage={"90%"} color={"#FF3F3F"} move={true} />

          <SkillCard skill={"CSS"} percentage={"70%"} color={"#008FFF"} />

          <SkillCard skill={"Javascript"} percentage={"80%"} color={"#FFB900"} move={true} />

          <SkillCard skill={"React"} percentage={"75%"} color={"#00FFF3"} />

          <SkillCard skill={"Java"} percentage={"65%"} color={"#14DB00"} move={true} />

          <SkillCard skill={"Scada"} percentage={"60%"} color={"#ff1a66"} />

          <SkillCard skill={"Catia"} percentage={"50%"} color={"#99cc00"} move={true} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
