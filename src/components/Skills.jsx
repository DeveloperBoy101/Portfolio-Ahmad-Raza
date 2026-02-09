import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SkillBar from "./SkillBar";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const skillList = [
    { skill: "JavaScript (ES6+)", percentage: 90, color: "bg-yellow-500" },
    { skill: "React / Next.js", percentage: 85, color: "bg-yellow-500" },
    { skill: "Node.js / Express", percentage: 80, color: "bg-yellow-500" },
    { skill: "MongoDB / PostgreSQL", percentage: 75, color: "bg-yellow-500" },
    { skill: "Tailwind CSS / SCSS", percentage: 95, color: "bg-yellow-500" },
  ];

  return (
        <section
      id="Skills"
      className="px-4 md:px-12 sm:mb-48 pt-32 sm:pt-36 lg:pt-40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 relative">
          <h2 className="text-6xl md:text-8xl font-extrabold text-gray-500 opacity-20 uppercase tracking-normal sm:tracking-widest absolute inset-x-0 lg:-mt-3 pointer-events-none">
            Proficiency
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest relative inline-block pb-1 sm:mt-4 mt-4">
            MY SKILLS
            <span className="block h-1 w-16 mx-auto bg-yellow-500 mt-1"></span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Description with AOS fade-right */}
          <div data-aos="fade-right" className="p-4">
            <h4 className="text-2xl font-bold text-white mb-4">
              Full-Stack Expertise with a Focus on Modern Web
            </h4>
            <p className="text-gray-400 leading-relaxed mb-4 text-base">
              I am a highly proficient <strong>full-stack developer</strong> specializing in
              the MERN stack and modern front-end libraries. My goal is to build
              highly performant, scalable, and user-friendly applications from
              the ground up.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4 text-base">
              My core strengths lie in <strong>React/Next.js</strong> for crafting engaging
              UIs and <strong>Node.js/Express</strong> for robust, high-throughput APIs. I
              focus on clean code, testability, and continuous integration.
            </p>
            <a
              href="#Projects"
              className="inline-flex items-center mt-4 px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg 
                           hover:bg-yellow-400 transition duration-300 transform hover:-translate-y-0.5 hover:shadow-yellow-500/50"
            >
              View Projects
            </a>
          </div>

          {/* Right Side - Skill Bars (untouched) */}
          <div className="p-4 space-y-4">
            {skillList.map((item, index) => (
              <SkillBar
                key={index}
                skill={item.skill}
                percentage={item.percentage}
                color={item.color}
                thickness="h-3"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
