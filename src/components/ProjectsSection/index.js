
import React, { useEffect } from "react";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectCard,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardImage,
  CardsContainer,
} from "./ProjectsElements";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Cards from "./ProjectsArray";
import Modal from "react-modal";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    height: "60vh",
    position: 'absolute',
  },
};

Modal.setAppElement("#root");

const ProjectsSection = ({triggerModal, modalIsOpen, setModalIsOpen}) => {
  const TitleAnimation = {
    Titlevisible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
    Titlehidden: { opacity: 0, x: -100, transition: { duration: 1.0 } },
  };
  const CardsAnimation = {
    Cardsvisible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    Cardshidden: { opacity: 0, y: 100, transition: { duration: 1.0 } },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "300px 100px 0px 0px",
  });
  

  useEffect(() => {
    if (inView && window.innerWidth > 780) {
      controls.start("Titlevisible");
    } else if (!inView && window.innerWidth > 780) {
      controls.start("Titlehidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView && window.innerWidth > 780) {
      controls.start("Cardsvisible");
    } else if (!inView && window.innerWidth > 780) {
      controls.start("Cardshidden");
    }
  }, [controls, inView]);

  return (
    <ProjectsContainer id="projects">
      <Modal
        isOpen={modalIsOpen}
        //onRequestClose={() => setModalIsOpen(false)}
        style={modalStyles}
        contentLabel="Card Modal"
      >
      <button onClick={()=>setModalIsOpen(false)}>Exit</button>
      </Modal>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={TitleAnimation}
      >
        <ProjectsH1>Projects</ProjectsH1>
      </motion.div>
      <CardsContainer>
        {Cards.map((card) => (
          <motion.div
            key={card.id}
            //ref={ref}
            animate={controls}
            initial="hidden"
            variants={CardsAnimation}
          >
            <ProjectCard onClick={triggerModal}>
              <ProjectCardImage src={card.image}></ProjectCardImage>
              <ProjectCardTitle>{card.title}</ProjectCardTitle>
              <ProjectCardDescription>
                {card.description}
              </ProjectCardDescription>
            </ProjectCard>
          </motion.div>
        ))}
      </CardsContainer>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
