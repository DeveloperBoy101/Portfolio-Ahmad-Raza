import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLaptopCode,
  FaPalette,
  FaCode,
  FaLayerGroup,
  FaServer,
  FaChalkboardTeacher,
} from "react-icons/fa";

const services = [
  {
    icon: FaLaptopCode,
    title: "Web Development",
    desc: "Building responsive and modern websites with clean code, focusing on performance and user experience.",
  },
  {
    icon: FaPalette,
    title: "UI/UX Design",
    desc: "Crafting visually stunning and user-friendly interfaces that drive engagement and conversions.",
  },
  {
    icon: FaCode,
    title: "Frontend Development",
    desc: "Developing interactive, high-performance, and visually appealing user interfaces using the latest technologies.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Web Presentation ",
    desc: "Designing professional web-based presentations and portfolios to effectively showcase skills and creativity.",
  },
  {
    icon: FaServer,
    title: "Backend Development",
    desc: "Creating secure, high-performance, and scalable server-side applications and APIs.",
  },
  {
    icon: FaLayerGroup,
    title: "Full-Stack Development",
    desc: "Combining frontend and backend technologies to build complete, efficient, and scalable web solutions.",
  },
];

const MyServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const getAnimation = (index) => {
    if (index % 3 === 0) return "fade-right";
    if (index % 3 === 1) return "flip-left";
    return "fade-left";
  };

  const ServiceCard = ({ icon: Icon, title, desc, index }) => (
    <div
      data-aos={getAnimation(index)}
      data-aos-delay={index * 100}
      className="group bg-gray-800/70 rounded-xl p-8 flex flex-col items-center text-center shadow-2xl border border-gray-700/50 
      transition-all duration-500 ease-in-out cursor-pointer h-full transform 
      hover:shadow-yellow-500/30 hover:bg-gray-700 hover:scale-[1.02] hover:border-yellow-500/50 
      hover:-translate-y-1"
      id="Services"
    >
      <div
        className="mb-6 p-4 rounded-full bg-yellow-500/10 transition-all duration-300 
                      group-hover:bg-yellow-500 group-hover:shadow-lg group-hover:shadow-yellow-500/40"
      >
        <Icon
          size={32}
          className="text-yellow-500 transition-colors duration-300 group-hover:text-gray-900"
        />
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );

  return (
    <section id="Services" className="py-40 md:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 relative">
          <h2 className="text-6xl md:text-8xl font-extrabold text-gray-500 opacity-20 uppercase tracking-normal sm:tracking-widest absolute inset-x-0 lg:-mt-3 pointer-events-none">
            What I DO
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest relative inline-block pb-1 sm:mt-4 mt-4">
            MY SERVICES
            <span className="block h-1 w-16 mx-auto bg-yellow-500 mt-1"></span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServices;
