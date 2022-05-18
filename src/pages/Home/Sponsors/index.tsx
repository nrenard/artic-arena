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
          In November, Svalbard experiences polar nights — total darkness with eerie, blueish-purple skies.
          <br />
          Couple that with the fastest internet speed on planet Earth, what you get is a gaming festival of epic proportions.
        </p>

        <Button>TAKE ME TO SVALBARD</Button>
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
