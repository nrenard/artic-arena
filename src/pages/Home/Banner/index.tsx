import React from 'react';

import ballsRainbow from 'assets/balls-rainbow.svg'
import logo from 'assets/logo.svg'
import mountain from 'assets/mountain.png'

import { Container, MountainImage, StartButton, TextPrincipal, TextSecond, TopImages } from './styles';

const Banner: React.FC = () => {
  return (
    <Container>
      <div>
        <TopImages>
          <img src={ballsRainbow} alt="Rainbow" />
          <img src={logo} alt="Logo" />
        </TopImages>

        <TextPrincipal>Are you ready?</TextPrincipal>

        <TextSecond>Join the best gamers under the polar night</TextSecond>

        <StartButton>
          sTART
        </StartButton>
      </div>

      <MountainImage src={mountain} alt="mountain" />
    </Container>
  );
}

export default Banner;