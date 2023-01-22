import React, { useEffect, useState } from "react";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectCard,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardImage,
  CardsContainer,
  ModalTools,
  ModalCard,
  ExitButton,
  ModalCardImage,
  ModalCardTitle,
  ModalCardDescription,
  LeftContainer,
  RightContainer,
  Tool,
  ToolsTitle,
  ProjectLinks,
  CodeLink,
  LiveLink,
} from "./ProjectsElements";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Cards from "./ProjectsArray";
import Modal from "react-modal";
import { FaCode, FaDesktop } from "react-icons/fa";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    height: "70vh",
    position: "absolute",
    background: "#000",
    borderRadius: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center',
    minWidth: '400px'
  },
};



Modal.setAppElement("#root");

const ProjectsSection = ({ triggerModal, modalIsOpen, setModalIsOpen }) => {
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
  const [cardSelected, setCardSelected] = useState(0);

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
  //console.log(Cards)
  const handleClickProject = (props) => {
    setCardSelected(props);
    triggerModal();
  };
  return (
    <ProjectsContainer id="projects">
      <Modal
        isOpen={modalIsOpen}
        //onRequestClose={() => setModalIsOpen(false)}
        style={modalStyles}
        contentLabel="Card Modal"
      >
        <ModalCard>
          <LeftContainer>
            <ModalCardImage src={cardSelected.image} />
            <ModalCardTitle>{cardSelected.title}</ModalCardTitle>
            <ModalCardDescription>
              {cardSelected.longDescription}
            </ModalCardDescription>
          </LeftContainer>
          <RightContainer>
            <div>
              <ToolsTitle>Weapons used:</ToolsTitle>
              <ModalTools>
                {cardSelected.tools &&
                  cardSelected.tools.map((tool, index) => (
                    <Tool style={{ color: "white" }} key={index}>
                      {tool}
                    </Tool>
                  ))}
              </ModalTools>
            </div>
            <ProjectLinks>
              <CodeLink href={cardSelected.linkCode} target='_blank'>
                <FaCode />
              </CodeLink>
              <LiveLink href={cardSelected.linkLive} target='_blank'>
                <FaDesktop />
              </LiveLink>
            </ProjectLinks>
          </RightContainer>
        </ModalCard>
        <ExitButton onClick={() => setModalIsOpen(false)}>Exit</ExitButton>
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
        {Cards &&
          Cards.map((card) => (
            <motion.div
              key={card.id}
              //ref={ref}
              animate={controls}
              initial="hidden"
              variants={CardsAnimation}
            >
              <ProjectCard onClick={() => handleClickProject(card)}>
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
