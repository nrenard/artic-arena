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
            The most exclusive gaming events, in the Arctic. Located in
            Longyearbyen, Svalbard, Arctic Arena hosts the ultimate Nordic
            gaming event during the polar night - when the Arctic sky is pitch
            black, illuminated only by the northern lights. But how did the
            Arctic become the home of a video game revolution?
            <br />
            <br />
            In 2020, the whole world experienced colossal changes. Technology
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
            At Arctic Arena, we focus on gaming, from casual to competitive. We
            host gaming areas, exclusive launches, and tournaments for all skill
            levels and game genres. All of that during the polar night, when no
            one can tell us to go out and enjoy the sunshine. We are aiming to
            build a community that’s warm and welcoming with zero tolerance for
            discrimination or hate, and we would love for you to be a part of
            it.
            <br />
            <br />
            An event from gamers to gamers.
          </p>
          {/* <Button>SIGN UP FORM GAMING UPDATES</Button> */}
        </EventRight>
      </WrappVenue>
      <SectionTitleMobile>ARCTIC ARENA</SectionTitleMobile>
    </Container>
  );
};

export default ArcticArena;
