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
          <div className="w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from-primary to-secondary relative">
            <img src={about} className="w-full rounded-md h-auto object-contain" alt="" />
            <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from-primary to-secondary rounded-md blur [5px] -z-10"></div>
          </div>
        </div>
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, hic? Quibusdam vero nostrum incidunt quisquam expedita dolorum consectetur sint voluptas iure ratione excepturi ea enim distinctio ipsam, eaque, itaque doloribus quos qui hic quo!
          </p>

          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, hic? Quibusdam vero nostrum incidunt quisquam expedita dolorum consectetur sint voluptas iure ratione excepturi ea enim distinctio ipsam, eaque, itaque doloribus quos qui hic quo!
          </p>

          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, hic? Quibusdam vero nostrum incidunt quisquam expedita dolorum consectetur sint voluptas iure ratione excepturi ea enim distinctio ipsam, eaque, itaque doloribus quos qui hic quo!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
