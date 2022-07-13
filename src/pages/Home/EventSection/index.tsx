import React from "react";
import { Link } from "react-router-dom";

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
          Welcome to the arctic server. The only gaming event that happens under
          the polar night.
          <br />
          <br />
          Picture this: The sun is below the horizon all day and the northern
          lights dance across the sky. Who’s going to tell us it is time to stop
          playing?
          <br />
          <br />
          This is the setting for the world’s most exclusive gaming event. You
          are free to play all over town at different venues, in a fully
          immersive experience, with top tier digital infrastructure.
          <br />
          <br />
          We call it the Arctic Arena. Are you ready?
        </p>
        <Button>
          <Link to={"/about"}>TELL ME MORE!</Link>
        </Button>
      </EventRight>
      <SectionTitleMobile>EVENT</SectionTitleMobile>
    </Container>
  );
};

export default EventSection;
