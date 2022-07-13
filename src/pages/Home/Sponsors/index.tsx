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
          darkness. Well, except for the wave-like lights dancing across the
          sky. We call it the Aurora.
          <br />
          <br />
          Svalbard might be known for its nature, but it’s a well-kept tech
          secret. We are the testing pilot for 5G technology, you can expect to
          have access to 5G networks all around town. Don’t have 5G at home?
          Well, the polar bears do.
          <br />
          <br />
          The town of Longyearbyen is the perfect Arctic Arena with its
          incredible atmosphere, restaurants, venues, and much more. All within
          walking distance.
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
