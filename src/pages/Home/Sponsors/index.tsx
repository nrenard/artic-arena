import React from "react";

import bgEvent from "assets/imgHome2.png";
import ImageWithCustomBorder from "components/ImageWithCustomBorder";
import SectionTitle from "components/SectionTitle";

import {
  Container,
  ContainerImage,
  EventLeft,
  SectionTitleContainer,
  SectionTitleMobile,
} from "./styles";
import Button from "components/Button";
import { Link } from "react-router-dom";

const SponsorsSection: React.FC = () => {
  return (
    <Container>
      <SectionTitleMobile>VENUE</SectionTitleMobile>
      <SectionTitleContainer>
        <SectionTitle>VENUE</SectionTitle>
      </SectionTitleContainer>
      <EventLeft>
        <h3>Svalbard, the Nordic Arctic</h3>
        <p>
          In November, Svalbard experiences polar nights — total darkness with
          eerie, blueish-purple skies.
          <br />
          Except of course for the splendiferous Aurora Borealis — wave-like
          lights dancing across the sky, varying in colours from dark blues and
          greens to reds and orange.
          <br />
          Oh, we’re the testing pilot for 5G, so naturally you can expect 5G in
          all of Longyearbyen.
          <br />
          Dark skies + dancing lights + super fast 5G = A gaming festival of
          epic proportions
        </p>

        <Link to="/about?venue=1">
          <Button>TAKE ME TO SVALBARD</Button>
        </Link>
      </EventLeft>
      <ContainerImage>
        <ImageWithCustomBorder
          pathImage={bgEvent}
          variation3
          variation1
          variation2
          variation4
        />
      </ContainerImage>
    </Container>
  );
};

export default SponsorsSection;
