import React from "react";

import ballsRainbow from "assets/balls-rainbow.svg";
import logo from "assets/logo.svg";

import {
  Container,
  StartButton,
  TextPrincipal,
  TextSecond,
  TopImages,
  WrapperBannerContent
} from "./styles";

const Banner: React.FC = () => {
  return (
    <Container>
      <div>
        <WrapperBannerContent>
          <TopImages>
            <img src={ballsRainbow} alt="Rainbow" />
            <img src={logo} alt="Logo" />
          </TopImages>

          <TextPrincipal>Are you ready?</TextPrincipal>

          <TextSecond>
            <h2>Join the best gamers under the polar night</h2>
          </TextSecond>
        </WrapperBannerContent>

        <StartButton href="#section">START</StartButton>
      </div>

      {/* <MountainImage src={mountain} alt="mountain" /> */}
    </Container>
  );
};

export default Banner;
