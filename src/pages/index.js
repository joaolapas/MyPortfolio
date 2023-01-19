import React from "react";
import AboutSection from "../components/About";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FooterSection from "../components/FooterSection";

const Home = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <FooterSection />
    </>
  );
};

export default Home;
