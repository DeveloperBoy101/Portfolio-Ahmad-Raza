import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const personalData = {
    name: "Ahmad Raza",
    role: "MERN Developer",
    description:
      "I’m a passionate and results-driven Full Stack Developer specializing in the MERN stack. I craft clean, secure, and scalable web applications that blend technical expertise with creative design ",
    details: [
      { label: "Birthday", value: "April 22 2005" },
      { label: "Phone", value: "+92 3141460797" },
      { label: "Email", value: "ahmadraza.bablo1@gmail.com" },
      { label: "From", value: "Taj colony Depalpur Okara/Pakistan " },
      { label: "Language", value: "English, Urdu (fluent)" },
      { label: "Freelance", value: "Available" },
    ],
  };

  return (
    <section
      id="About"
      className="px-4 md:px-12 sm:mb-52 pt-32 sm:pt-36 lg:pt-40"
    >
      <div className="text-center mb-12 relative">
        <h2 className="text-6xl md:text-8xl font-extrabold text-gray-500 opacity-20 uppercase tracking-widest absolute inset-x-0 lg:-mt-3 pointer-events-none">
          About Me
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest relative inline-block pb-1 sm:mt-4 mt-4">
          About Me
          <span className="block h-1 w-16 mx-auto bg-yellow-500 mt-1"></span>
        </h3>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        <div className="flex-shrink-0 w-full md:w-1/3 lg:w-2/5 xl:w-1/3">
          <img
            src="./Aboutme.png"
            alt={personalData.name}
            className="w-full sm:h-[450px] object-cover rounded-lg border-yellow-500 sm:w-80 md:w-96 shadow-[0_0_25px_rgba(255,215,0,0.5),0_0_40px_rgba(255,165,0,0.5)]"
            style={{ minHeight: "300px" }}
          />
        </div>

        <div
          data-aos="fade-left"
          className="flex-grow text-gray-300 w-full md:w-2/3 lg:w-3/5 xl:w-2/3"
        >
          <h4 className="text-white text-3xl md:text-4xl font-bold mb-3 tracking-wide">
            Hi There! I'm{" "}
            <span className="text-yellow-500">{personalData.name}</span>
          </h4>
          <p className="text-yellow-500 text-lg font-medium mb-6">
            {personalData.role}
          </p>
          <p className="text-gray-400 leading-relaxed mb-8 text-base md:text-lg">
            {personalData.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
            {personalData.details.map((item, index) => (
              <div key={index} className="flex">
                <span className="text-white font-semibold min-w-[90px]">
                  {item.label} :
                </span>
                <span className="ml-3 text-gray-400">{item.value}</span>
              </div>
            ))}
          </div>

          <a
            href="/CV2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
