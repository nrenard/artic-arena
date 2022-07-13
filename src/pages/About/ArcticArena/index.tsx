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
            An event from gamers, to gamers
            <br/>
            <br />
            Located in Longyearbyen, Svalbard, Arctic Arena hosts the ultimate Nordic gaming event during the polar night. From high tech fun to esports careers, we immerse players fully, from the food to the soundtrack. But how did the Arctic become the home of a video game revolution?
            <br />
            <br />
            In 2020, the whole world experienced colossal changes. Technology became the way people connected, and the gaming industry’s growth exploded. We noticed that players were hungry for amazing content, but things were just not happening fast enough here in Norway. So, we picked the coolest place on Earth to be the Norwegian hub for the video game industry, and we are working on speeding up and creating new games that are exactly what gamers want.
            <br />
            <br />
            Arctic Arena was born out of a desire for gamers to experience an event truly made for them. Gaming is, after all, the largest entertainment industry – so why should we constantly share spaces with other entertainment mediums?
            <br />
            <br />
            Meet people from all over the world and engage with your favourite games in different mediums — Console, PC, VR, AR, Tabletop, and much more.
            Join and compete with gamers from across the globe and experience an authentic Scandinavian experience as you play all over town, 24/7.
            <br />
            <br />
            During our first event in February 2023, we’ll host gaming areas, exclusive launches, and tournaments for all skill levels and game genres. And since it's night 24/7, no one can tell us to go out and enjoy the sunshine. What’s more? The fun starts at home, and lasts all year.
            <br />
            <br />
            We are building a community that’s warm and welcoming with zero tolerance for discrimination or hate, and we would love for you to be a part of it. Arctic Arena is also a gaming brand, and that means that we not only bring people together, but create the platforms on which they can have fun. But more on that later.
          </p>
          {/* <Button>SIGN UP FORM GAMING UPDATES</Button> */}
        </EventRight>
      </WrappVenue>
      <SectionTitleMobile>ARCTIC ARENA</SectionTitleMobile>
    </Container>
  );
};

export default ArcticArena;
