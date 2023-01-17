import React, { useState } from "react";
import { Button } from "../ButtonElement";
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
  HeroName
} from "./HeroElements";
import Video from "../../videos/video.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home ">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH2 style={{fontSize:'5rem', marginLeft: '-5px'}}>HI,</HeroH2>
        <HeroH2>I'm</HeroH2>
        <HeroName >João Lapas</HeroName>
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
