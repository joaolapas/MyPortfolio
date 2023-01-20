import { MotionConfig } from "framer-motion";
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
import project1 from "../../images/project1.png";
import Cards from "./ProjectsArray";

const ProjectsSection = () => {
  const TitleAnimation = {
    Titlevisible: { opacity: 1, x: 0, transition: { duration: 1.0 } },
    Titlehidden: { opacity: 0, x: -800, transition: { duration: 3.0 } },
  };
  const controls = useAnimation();
  const hoverControl = useAnimation();
  const [ref, inView] = useInView();
  

  useEffect(() => {
    if (inView && window.innerWidth > 780) {
      controls.start("Titlevisible");
    } else if (!inView && window.innerWidth > 780) {
      controls.start("Titlehidden");
    }
  }, [controls, inView]);
  console.log({Cards});
  return (
    <ProjectsContainer id="projects">
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
            animate={hoverControl}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard>
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
