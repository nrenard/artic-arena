import React from "react";

import bgEvent from "assets/about-image1.png";
import SectionTitle from "components/SectionTitle";

import {
  Container,
  ContainerImage,
  EventRight,
  SectionTitleContainer,
  SectionTitleMobile,
} from "./styles";

const ArcticArena: React.FC = () => {
  return (
    <Container id="section">
      <SectionTitleContainer>
        <SectionTitle>ARCTIC ARENA</SectionTitle>
      </SectionTitleContainer>
      <ContainerImage>
        <img src={bgEvent} alt="Arctic arena" />
      </ContainerImage>
      <EventRight>
        <h3>What is Arctic Arena?</h3>
        <p>
          Only the biggest and best gaming events company in the Arctic!
          <br />
          Located in Svalbard, Arctic Arena hosts the ultimate Nordic gaming
          event every November, when the Arctic sky is pitch black, illuminated
          only by the polar lights.
        </p>
      </EventRight>
      <SectionTitleMobile>ARCTIC ARENA</SectionTitleMobile>
    </Container>
  );
};

export default ArcticArena;
