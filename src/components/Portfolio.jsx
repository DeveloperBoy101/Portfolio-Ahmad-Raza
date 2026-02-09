import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "OPTIBU URBAN-THREADS",
    desc: "Full stack MERN e-commerce platform with payment gateway integration.User also contact with Owner using Email.js",
    tech: ["JS", "React", "Node.js", "Express", "MongoDB"],
    img: "./Stack.png",
    link: "https://optibuy.onrender.com/",
  },
  {
    title: "OPTIBU URBAN-THREADS",
    desc: "Full stack MERN e-commerce admin panel only for authorized user.",
    tech: ["JS", "React", "Node.js", "Express", "MongoDB"],
    img: "./image2.png",
    link: "https://optibuy-admin.onrender.com/",
  },
  {
    title: "REAL ESTATE SITE",
    desc: "A real state frontened only website with carousel .Contact section using Email.Js .",
    tech: ["JS", "React", "Tailwind"],
    img: "./img2.png",
    link: "https://my-portfolio-ivory-alpha-41.vercel.app/",
  },
  {
    title: "MUSIC COURSE SITE (Only Frontened)",
    desc: "A Next.Js music website with routing frontened only to get music courses with asternity UI.",
    tech: ["JS", "Next.Js", "Tailwind", "Asternity UI"],
    img: "./img1.png",
    link: "https://melody-lab.vercel.app/",
  },
  {
    title: "WEATHER APP",
    desc: "A react based Weather App using React and Tailwind, to check the weather of any country. ",
    tech: ["JS", "React", "Tailwind","Weather Api"],
    img: "./Test6.png",
    link: "",
  },
  {
    title: "CURRENCY CONVERTER",
    desc: "It is the currency converter app made by react and tailwind with integratiio of currency exchange API.",
    tech: ["JS", "React"],
    img: "./img5.png",
    link: "https://currency-convertor-app-five.vercel.app/",
  },
  {
    title: "PASSWORD GENERATOR APP",
    desc: "An ineractive password generator app where a user can create a password for weak to strong by adding numbers and special characters. ",
    tech: ["JS", "React", "Tailwind", "React Carousel"],
    img: "./Test5.png",
    link: "https://restraunt-le-perla.vercel.app/",
  },

  {
    title: "RESORT BOOKING SITE (Only Design)",
    desc: "Interactive Restraunt booking website made by Next.js for clients with beautiful colors. A react based frontened project with carousel.",
    tech: ["JS", "React", "Tailwind", "React Carousel"],
    img: "./img14.png",
    link: "https://restraunt-le-perla.vercel.app/",
  },
  {
    title: "FOOD PAGE",
    desc: "A  frontened food point single landing page made by react for food pickup",
    tech: ["JS", "React", "Tailwind"],
    img: "./img6.png",
    link: "https://restraunt-website-five.vercel.app/",
  },
  {
    title: "ECOMMERSE SITE (Design)",
    desc: "SHOPSY is the frontened website template made from scratch with animations and react carousels.",
    tech: ["JS", "React"],
    img: "./img3.png",
    link: "https://ecommerse-website-vsq8.vercel.app/",
  },
];

const Portfolio = () => {
  const INITIAL_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true, // enables zoom-out on scroll up
    });
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(projects.length);
  };

  const handleViewLess = () => {
    setVisibleCount(INITIAL_COUNT);
  };

  return (
    <section
      id="Projects"
      className="py-40 md:py-32 px-4 sm:px-6 lg:px-12 min-h-screen"
    >
      <div className="text-center mb-12 relative">
        <h2 className="text-6xl md:text-8xl font-extrabold text-gray-500 opacity-20 uppercase tracking-widest absolute inset-x-0 lg:-mt-3 pointer-events-none">
          PORTFOLIO
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest relative inline-block pb-1 sm:mt-4 mt-4">
          MY WORK
          <span className="block h-1 w-16 mx-auto bg-yellow-500 mt-1"></span>
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, visibleCount).map((project, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="
    relative group
    bg-gray-800/80 rounded-xl overflow-hidden shadow-xl flex flex-col cursor-pointer
    border-2 border-transparent transition-all duration-300 ease-in-out 
    hover:border-yellow-400 hover:shadow-yellow-500/30 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
  "
            style={{ transformOrigin: "center" }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-80"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 flex-grow">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-yellow-400 text-sm bg-gray-700 px-2 py-1 rounded transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
        mt-4 inline-block text-center bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg 
        transition-all duration-300 ease-in-out 
        hover:bg-yellow-400 hover:scale-[1.03] shadow-md hover:shadow-lg
      "
              >
                Visit Project
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10 space-x-4">
        {visibleCount < projects.length && (
          <button
            onClick={handleLoadMore}
            className="
              bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-lg shadow-md 
              transition-all duration-300 ease-in-out 
              hover:bg-yellow-400 hover:scale-105 hover:shadow-lg
            "
          >
            Load More
          </button>
        )}
        {visibleCount > INITIAL_COUNT && (
          <button
            onClick={handleViewLess}
            className="
              bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-lg shadow-md
              transition-all duration-300 ease-in-out 
              hover:bg-yellow-400 hover:scale-105 hover:shadow-lg
            "
          >
            View Less
          </button>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
