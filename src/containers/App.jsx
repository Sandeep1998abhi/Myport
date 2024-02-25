import React from "react";
import { About, Contact, Header, Home, ParticlesContainer, Projects, ServiceCount, Skills } from "./";
import { AnimatePresence, motion } from 'framer-motion'
import { Socials } from "../utils/helper";
import { HomeSocialLinks } from "../components";
const App = () => {
  return (
    <div className="w-full xl:w-[1300px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">

      {/* particle */}

      <ParticlesContainer />

      {/*header */}
      <Header />

      {/* home*/}
      <Home />

      {/* Service */}
      <ServiceCount />

      {/* about */}
      <About />

      {/* skills */}
      <Skills />

      {/* projects */}
      <Projects />

      {/* contact */}
      <Contact />

      {/* footer */}

      <div className="w-full flex flex-col items-center justify-start  mt-32 mb-12">
        <p className="text-3xl tracking-wide text-texlight">Sandeep Kumar</p>
        <div className="flex items-start justify-center gap-16 mt-16">
          <AnimatePresence>
            {
              Socials &&
              Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index} />
              ))
            }
          </AnimatePresence>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12">
          <p className="text-texlight text-center">
            Sandeep&copy;2024
          </p>
          <div className="w-full flex flex-col items-center justify-center gap-3 ">

            <p className="text-texlight text-center">
              mahisandeep786@gmail.com
            </p>
            <p className="text-texlight text-center">
              9140982654
            </p>



          </div>


          <div className="w-full flex flex-col items-center justify-center gap-3 ">
            <a href="https://violet-ursula-28.tiiny.site/" target="blank" className="group text-blue-500 transition-all duration-300 ease-in-out">
              <p className="text-primary text-center bg-left-bottom bg-gradient-to-r from-pink-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Resume
              </p>
            </a>

            <a href="#contact">
              <p className="text-primary text-center">
                Hire me
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
