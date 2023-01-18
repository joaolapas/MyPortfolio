import React, { useState } from "react";
import { Button } from "../ButtonElement";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import cv from '../../CV/cv.pdf'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH2,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroName,
  LeftSideButtons,
  LeftBtn,
  LeftButton
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const hi = 'Hi,'.split('');
  const im = "I'm".split('');
  const joao = 'João'.split('');
  const lapas = 'Lapas'.split('');
  const rubberBand = () => {
    return {
      transform:[
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)"
      ]
    }
  }
  

  return (
    <HeroContainer id="home ">
    <HeroBg><LeftSideButtons>
    <LeftBtn href='https://github.com/joaolapas'>
      <LeftButton
      value='to my GitHub page'
      primary={true}
      dark={true}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      ><div>GitHub</div><div><FaGithub/></div></LeftButton>
    </LeftBtn>
    <LeftBtn href='https://www.linkedin.com/in/joaolapas/'>
      <LeftButton
      primary={true}
      dark={true}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      ><div>LinkedIn</div><div><FaLinkedin/></div></LeftButton>
    </LeftBtn>
    <LeftBtn href={cv} download>
      <LeftButton
      primary={true}
      dark={true}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      ><div>CV</div><div><FaFileDownload/></div></LeftButton>
    </LeftBtn>
  </LeftSideButtons></HeroBg>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH2 style={{fontSize:'5rem', marginLeft: '-5px'}}>{
          hi.map((item, index) => {
            return (
              <motion.span
                key={index}
                whileHover={() => rubberBand()}
                style={{display: 'inline-block'}}
              >
                {item}
              </motion.span>
            )
          })
        }</HeroH2>
        <HeroH2>{
          im.map((item, index) => {
            return (
              <motion.span
                key={index}
                whileHover={() => rubberBand()}
                style={{display: 'inline-block'}}
              >
                {item}
              </motion.span>
            )
          })
        }</HeroH2>
        <HeroName >{
          joao.map((item, index) => {
            return (
              <motion.span
                key={index}
                whileHover={() => rubberBand()}
                style={{display: 'inline-block'}}
              >
                {item}
              </motion.span>
            )
          }) 
        } {
          lapas.map((item, index) => {
            return (
              <motion.span
                key={index}
                whileHover={() => rubberBand()}
                style={{display: 'inline-block'}}
              >
                {item}
              </motion.span>
            )
          }) 
        }</HeroName>
        <HeroP>I am a front-end developer. <br/>Please feel free to browse through my works.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="projects"
            primary={true}
            dark={true}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            My Projects {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
        
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
