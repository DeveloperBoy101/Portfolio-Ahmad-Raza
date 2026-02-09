import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const Hero = () => {
  const nameText = "Muhammad Ahmad ";
  const descText =
    "I’m a passionate and results-driven Full Stack Developer specializing in the MERN stack. I craft clean, secure, and scalable web applications that blend technical expertise with creative design — ensuring both high performance and stunning visuals for every project. I thrive in collaborative environments and enjoy solving complex problems efficiently. Continuously learning new technologies allows me to deliver modern and innovative solutions for clients worldwide.I am committed to writing maintainable and optimized code that follows best practices.";

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: (i = 1) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section id="Home" className="relative flex items-start justify-center overflow-hidden min-h-screen text-gray-100 pt-32 sm:pt-36 lg:pt-40">
      <div className="flex flex-col lg:flex-row-reverse items-start gap-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12">
        <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-1">
          <img
            src="./myimg.jpg"
            alt="Profile"
            className="rounded-full border-[7px] border-yellow-500 w-64 sm:w-80 md:w-96 shadow-[0_0_25px_rgba(255,215,0,0.5),0_0_30px_rgba(255,165,0,0.5)] mt-8 sm:mt-1"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-start text-left order-2 lg:order-2">
          <motion.h1
            className="text-5xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-t from-yellow-500 to-gray-300 bg-clip-text text-transparent tracking-tight mb-8 leading-snug"
            variants={slideInFromLeft}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {nameText}
          </motion.h1>

          <motion.h2
            className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-t from-yellow-500 to-yellow-300 bg-clip-text text-transparent"
            variants={slideInFromLeft}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            I am a{" "}
            <span className="border border-yellow-600 rounded-lg px-3 py-2 sm:px-3 sm:py-2 shadow-[0_0_10px_rgba(255,215,0,0.5),0_0_35px_rgba(255,165,0,0.5)] transition-all duration-500">
              <ReactTyped
                strings={[
                  "MERN Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "UI/UX Designer",
                ]}
                typeSpeed={70}
                backSpeed={40}
                loop
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-[16px] bg-gradient-to-b from-gray-300 via-yellow-200 to-white/20 bg-clip-text text-transparent leading-relaxed tracking-wider max-w-xl"
            variants={slideInFromLeft}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            {descText}
          </motion.p>
        </div>
      </div>

      <a
        href="https://wa.me/message/VC3B4UX3ADZEM1"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full inline-flex items-center justify-center text-3xl shadow-[0_0_25px_rgba(37,211,102,0.7)] hover:bg-[#1DA851] transition-colors duration-300 fixed bottom-10 right-5 z-50"
      >
        <FaWhatsapp />
      </a>
    </section>
  );
};

export default Hero;
