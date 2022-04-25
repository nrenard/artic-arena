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

const SponsorsSection: React.FC = () => {
  return (
    <Container>
      <SectionTitleMobile>SPONDORS</SectionTitleMobile>
      <SectionTitleContainer>
        <SectionTitle>SPONDORS</SectionTitle>
      </SectionTitleContainer>
      <EventLeft>
        <h3>TITLE</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
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
