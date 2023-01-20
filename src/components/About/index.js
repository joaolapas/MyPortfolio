import React, { useEffect } from "react";
import {
  AboutContainer,
  AboutVideoContainer,
  AboutVideo,
  TextContainer,
  AboutText,
  Title
} from "./AboutElements";
import Video from "../../videos/spiderman.mp4";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const aboutText = 
  `  After being bitten by a genetically modified spider, 
  I gained superpowers. 
  I became a Front-End Developer, which allowed me to build
  websites from scratch and bring life to web pages. 
  My abilities in design and programming are so precise and 
  advanced that I can make any website attractive and 
  user-friendly, as if by magic. 
  I am also able to understand the needs of the user and use
  my skills to create friendly and intuitive interfaces, 
  making the user experience truly amazing.

  I fight against monotony and boredom by using my abilities 
  to make the internet a better and more user-friendly place. 
  Despite feeling powerful, I understand that great powers 
  come with great responsibilities. Therefore, I recognize 
  that in order to maintain my abilities and continue to 
  evolve, I must work hard and stay dedicated to my craft.
  
  My objective is to continue growing and improving every day.`
  const SpidermanAnimation = {
    Spidermanvisible: { opacity: 1, x: 0, transition: { duration: .5 } },
    Spidermanhidden: { opacity: 0, x: -800, transition: { duration: 2.0 } },
  };
  const TextAnimation = {
    Spidermanvisible: { opacity: 1, x: 0, transition: { duration: 1.0 } },
    Spidermanhidden: { opacity: 0, x: -2000, transition: { duration: 3.0 } },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && window.innerWidth>780) {
      controls.start("Spidermanvisible");
      controls.start("Textmanvisible");
    } else if(!inView && window.innerWidth>780) {
      controls.start("Spidermanhidden");
      controls.start("Texthidden");
    }
  }, [controls, inView]);

  return (
    <>
      <AboutContainer id="about">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={TextAnimation}
        >
          <TextContainer>
            <Title>About me</Title>
            <AboutText>{aboutText}</AboutText>
          </TextContainer>
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={SpidermanAnimation}
        >
          <AboutVideoContainer>
            <AboutVideo autoPlay loop muted src={Video} type="video/mp4" />
          </AboutVideoContainer>
        </motion.div>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
