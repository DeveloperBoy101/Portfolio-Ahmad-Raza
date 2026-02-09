import React, { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const navItems = ["Home", "About", "Services", "Projects", "Skills"];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY = window.scrollY;
    };

    const handleKey = (e) => {
      if (e.key === "PageDown") setShowNav(false);
      if (e.key === "PageUp") setShowNav(true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 sm:px-10 py-5 z-50 transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex-shrink-0">
        <img src="./Lgo3.png" alt="Logo" className="w-24 sm:w-28 md:w-18" />
      </div>

      <ul className="hidden sm:flex space-x-8 ">
        {navItems.map((item) => (
          <li
            key={item}
            className="relative group cursor-pointer text-gray-300 tracking-wide font-bold"
          >
            <a
              href={`#${item}`}
              className="block px-1 py-1 bg-clip-text text-transparent bg-gradient-to-b from-yellow-100 to-gray-400"
            >
              {item}
              <span className="absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-yellow-100 via-black to-yellow-200 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden sm:block">
        <a href="#Contact">
          <button className="relative px-7 py-2 rounded-xl font-semibold text-gray-900 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 shadow-lg shadow-yellow-400/40 hover:scale-105 hover:from-yellow-400 hover:to-yellow-500 hover:text-gray-900 transition-all duration-500">
            <span className="relative z-10">Contact</span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 opacity-0 hover:opacity-20 rounded-xl transition duration-300"></span>
          </button>
        </a>
      </div>

      <div className="sm:hidden z-20">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <HiOutlineX className="text-yellow-500 w-8 h-8" />
          ) : (
            <HiOutlineMenu className="text-yellow-500 w-8 h-8" />
          )}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-60 bg-blue-950/20 backdrop-blur-xl transition-transform duration-300 z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
      >
        <ul className="flex flex-col items-center gap-6 mt-24 text-gray-300">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="text-lg bg-clip-text text-transparent bg-gray-300 hover:text-yellow-500 transition"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#Contact">
              <button className="relative px-7 py-2 rounded-xl font-semibold text-gray-900 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 shadow-lg shadow-yellow-400/40 hover:scale-105 hover:from-yellow-400 hover:to-yellow-500 hover:text-gray-900 transition-all duration-500 z-50">
                <span className="relative z-10">Contact</span>
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 opacity-0 hover:opacity-20 rounded-xl transition duration-300"></span>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
