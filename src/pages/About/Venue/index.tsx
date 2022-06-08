import React from "react";

import img1 from "assets/aboutImage44.png";
import img2 from "assets/aboutImage33.png";
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

const Venue: React.FC = () => {
  return (
    <Container>
      <SectionTitleMobile>VENUE</SectionTitleMobile>
      <SectionTitleContainer>
        <SectionTitle>VENUE</SectionTitle>
      </SectionTitleContainer>
      <EventLeft>
        <h3>Where’s AA happening?</h3>
        <p>
          Venue Where’s AA happening? In Svalbard, an archipelago with the
          fastest internet speeds in the Arctic and the most northerly 5G
          networks.
          <br />
          Added bonus: Svalbard’s a visa-free zone. Anyone can come and live
          here.
          <br />
          P.S. It's one of the northernmost settlements on planet Earth with
          rugged Arctic landscapes and fascinating wildlife — polar bears,
          reindeers, Arctic foxes. Get a taste of Svalbard (Link)
        </p>

        <Button>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://en.visitsvalbard.com/visitor-information/seasons/northern-lights-winter"
          >
            GET A TASTE OF SVALBARD
          </a>
        </Button>
      </EventLeft>
      <ContainerImage>
        <ImageWithCustomBorder pathImage={img2} />
        <ImageWithCustomBorder pathImage={img1} />
      </ContainerImage>
    </Container>
  );
};

export default Venue;
