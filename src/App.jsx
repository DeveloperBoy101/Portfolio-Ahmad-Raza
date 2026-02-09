import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import MyServices from "./components/MyServices";
import ContactSection from "./components/ContactSection";
import Testimonials from "./components/Testimonials";
import AboutMeSection from "./components/AboutMeSection";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
const App = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Full app background covering everything */}
      <div className="fixed inset-0 z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      <Navbar />
      <Hero />
      <AboutMeSection />
      {/* <Dashboard /> */}
      <Skills/>
      <MyServices />
      <Portfolio />
      <ContactSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
