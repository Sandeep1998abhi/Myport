import React from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { Hero } from "../assets";
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center gap-12"
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 w-full">
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 lg:items-start">
          <h2 className="text-3xl lg:text-4xl text-texlight">
            Hello, it's me
            <span className="block mt-4 text-4xl tracking-wider text-white lg:text-6xl">
              {" "}
              Sandeep Kumar
            </span>
          </h2>
          <h2 className="mt-4 text-2xl lg:text-4xl text-texlight whitespace-nowrap">
            And I'm
            <HeroTypeWritter
              speed={100}
              words={[" a Developer..", " a Developer..."]}
            />
          </h2>
          <p className="mt-6 text-base text-center text-texlight lg:text-left">Highly motivated and detail-oriented frontend developer with a strong foundation in HTML, CSS, JavaScript, java.I have
            knowledge of popular framework React. I also possess a foundational understanding of SCADA and CATIA. Eager to contribute my skills and passion for creating visually appealing and
            user-friendly application</p>
          <div className="flex justify-center gap-16 mt-16 item-center">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => (
                  <HomeSocialLinks key={index}
                    data={item} index={index} />
                ))
              }
            </AnimatePresence>
          </div>
          <a href="#"
            style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)" }}
            className="mt-12 border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 group hover:border-primary"
          >
            <p
              className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary"
            >Hire me</p>
          </a>
        </div>
        <div className="flex items-start justify-center w-full h-full lg:items-center">
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",

            }}

            src={Hero}
            className="object-contain w-auto h-auto"
          />
        </div>
      </div>
    </section>
  )
};

export default Home;
