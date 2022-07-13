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
          From November to February, Svalbard experiences polar nights — total
          darkness except for the wave-like lights dancing across the sky as the
          sun stays below the horizon, illuminating the clouds and sky with the
          most beautiful play of colors.
          <br />
          <br />
          Because we are the testing pilot for 5G technology, you can expect to
          have access to 5G networks all around Longyearbyen so you can make the
          most out of your Arctic experience.
          <br />
          <br />
          Dark skies with dancing lights and super-fast internet connection are
          just a few of the amazing things you’ll have access to in Longyearbyen
          during the Arctic Arena
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
