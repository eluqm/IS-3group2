import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  BtnWrapper,
  ArrowForward,
  ArrowRight
} from "./heroStyles";
import { Button } from "../btnStyles";
import Video from "../../assets/video/homeBg.mp4";

const HeroSection = () => {
  const [hover, setHover] = React.useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>

      <HeroContent>
        <HeroH1>Una casa para compartir investigaciones  </HeroH1>
        <HeroP>
          Bienvenido a BeResearcher una plataforma para investigadores que buscan aprender y compartir
        </HeroP>

        <BtnWrapper>
          <Button
            to="signUp"
            spy={true}
            exact="true"
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            btnPrimary="true"
            btnDarkTxt="true"
            btnDarkTxtHover="true"
          >
            Comenzar {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </BtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
