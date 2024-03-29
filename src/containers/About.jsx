import React from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { Leaf1, Leaf2, about } from "../assets";

const About = () => {
  return (
    <section
      id="about"
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
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">About</p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 w-full">
        <div className="w-full flex items-center justify-center px-8">
          <div className="w-full lg:w-81 p-[2px] rounded-md bg-gradient-to-br from-primary to-secondary relative">
            <img src={about} className="w-full rounded-md h-auto object-contain" alt="" />
            <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from-primary to-secondary rounded-md blur [5px] -z-10"></div>
          </div>
        </div>
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-texlight text-base tracking-wide text-justify">
          I am  graduated from NIT Durgapur, where my academic journey provided me with a solid foundation in problem-solving and analytical thinking. Despite my engineering background, my keen interest in technology and design led me to undertake specialized training as a frontend developer at Newton School.
          </p>

          <p className="text-texlight text-base tracking-wide text-justify">
          During my time at Newton School, I delved deep into the intricacies of HTML, CSS, and JavaScript, Reactjs refining my coding skills and gaining practical insights into creating visually appealing and functional web interfaces.
          </p>

          <p className="text-texlight text-base tracking-wide text-justify">
          Combining my engineering acumen with my newfound frontend development skills, I bring a unique blend of analytical thinking and creative problem-solving to the table. I am excited about the prospect of contributing innovative solutions to the dynamic landscape of frontend development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
