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
    <Container>
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
        <h3>TITLE</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Button>READ MORE</Button>
      </EventRight>
      <SectionTitleMobile>EVENT</SectionTitleMobile>
    </Container>
  );
};

export default EventSection;
