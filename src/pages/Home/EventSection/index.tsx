import React from "react";
import { Link } from 'react-router-dom'

import ImageWithCustomBorder from "components/ImageWithCustomBorder";
import SectionTitle from "components/SectionTitle";
import Button from "components/Button";

import bgEvent from "assets/imgHome1.png";

import {
  Container,
  ContainerImage,
  EventRight,
  SectionTitleContainer,
  SectionTitleMobile,
} from "./styles";

const EventSection: React.FC = () => {
  return (
    <Container id="section">
      <SectionTitleContainer>
        <SectionTitle>EVENT</SectionTitle>
      </SectionTitleContainer>
      <ContainerImage>
        <ImageWithCustomBorder
          pathImage={bgEvent}
          variation3
          variation1
          variation2
          variation4
        />
      </ContainerImage>
      <EventRight>
        <h3>The world’s northernmost gaming event</h3>
        <p>
          With the sun 24 hours below the horizon and the Aurora Borealis
          dancing across the sky, experience the extreme.
          <br />
          The only event in the world where you can play all over town at
          different venues... An Arctic Arena.
          <br />
          Meet players from all over the world and engage with your favourite
          games in different mediums — consoles, LAN, VR, augmented reality,
          cards, and much more.
          <br />
          Compete with the world’s best gamers and experience authentic
          Scandinavia as you play all over town, 24/7.
        </p>
        <Button>
          <Link to={'/about'}>TELL ME MORE!</Link>
        </Button>
      </EventRight>
      <SectionTitleMobile>EVENT</SectionTitleMobile>
    </Container>
  );
};

export default EventSection;
