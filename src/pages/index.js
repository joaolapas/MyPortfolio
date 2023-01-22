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
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const triggerModal = () => {
    setModalIsOpen((prev) => !prev)
  };

  
  
  return (
    <>
      
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}  modalIsOpen={modalIsOpen}/>
      <HeroSection modalIsOpen={modalIsOpen} />
      <AboutSection />
      <ProjectsSection triggerModal={triggerModal} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
      <FooterSection />
    </>
  );
};

export default Home;
