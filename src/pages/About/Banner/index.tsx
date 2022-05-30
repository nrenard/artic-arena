import React from "react";

import LogoAbout from "assets/logo-about.png";

import { Container, TitleAndLogo, Wrapp } from "./styles";

const Banner: React.FC = () => {
  return (
    <Container>
      <Wrapp>
        <TitleAndLogo>
          <h2>ABOUT</h2>
          <img src={LogoAbout} alt="Logo about" />
        </TitleAndLogo>
      </Wrapp>
    </Container>
  );
};

export default Banner;
