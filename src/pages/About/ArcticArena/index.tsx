import React from "react";

import bgEvent from "assets/about-image1.png";
import SectionTitle from "components/SectionTitle";

import {
  Container,
  ContainerImage,
  EventRight,
  SectionTitleContainer,
  SectionTitleMobile,
  WrappVenue,
} from "./styles";
import Button from "components/Button";

const ArcticArena: React.FC = () => {
  return (
    <Container id="section">
      <SectionTitleContainer>
        <SectionTitle>ARCTIC ARENA</SectionTitle>
      </SectionTitleContainer>
      <WrappVenue>
        <ContainerImage>
          <img src={bgEvent} alt="Arctic arena" />
        </ContainerImage>
        <EventRight>
          <h3>What is Arctic Arena?</h3>
          <p>
            Only the biggest and best gaming events company in the Arctic!
            <br />
            <br />
            Located in Longyearbyen, Svalbard, Arctic Arena hosts the ultimate
            Nordic gaming event every November, when the Arctic sky is pitch
            black, illuminated only by the polar lights.
            <br />
            <br />
            In 2020 the whole world experienced colossal changes. Technology
            became the way people connected, and the gaming industry’s growth
            exploded.
            <br />
            <br />
            Arctic Arena was born out of a desire for gamers to experience an
            event truly made for them. Gaming is, after all, the largest
            entertainment industry – so why should we constantly share spaces
            with other entertainment mediums?
            <br />
            <br />
            At Arctic Arena we focus on gaming — be it on consoles or cards,
            using VRs or phone screens.
            <br />
            <br />
            From gamers, to gamers
          </p>
          <Button>SIGN UP FORM GAMING UPDATES</Button>
        </EventRight>
      </WrappVenue>
      <SectionTitleMobile>ARCTIC ARENA</SectionTitleMobile>
    </Container>
  );
};

export default ArcticArena;
