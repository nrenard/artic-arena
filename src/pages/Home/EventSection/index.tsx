import React from "react";

import bgEvent from "assets/imgHome1.png";
import ImageWithCustomBorder from "components/ImageWithCustomBorder";
import SectionTitle from "components/SectionTitle";
import Button from "components/Button";

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
        <h3>A gaming event unlike any other</h3>
        <p>
          With the sun 24 hours below the horizon and the Aurora Borealis dancing across the sky, experience the extreme.
          <br />
          Are you ready to unleash your talents at the largest gaming event in the Arctic?
        </p>
        <Button>TELL ME MORE!</Button>
      </EventRight>
      <SectionTitleMobile>EVENT</SectionTitleMobile>
    </Container>
  );
};

export default EventSection;
