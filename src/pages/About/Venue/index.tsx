import React from "react";

import img1 from "assets/aboutImage44.png";
import img2 from "assets/aboutImage33.png";
import venue1 from "assets/venue1.png";
import venue2 from "assets/venue2.png";
import venue3 from "assets/venue3.png";
import ImageWithCustomBorder from "components/ImageWithCustomBorder";
import SectionTitle from "components/SectionTitle";

import {
  Container,
  ContainerBottomImages,
  ContainerImage,
  EventLeft,
  SectionTitleContainer,
  SectionTitleMobile,
} from "./styles";
import Button from "components/Button";

const Venue: React.FC = () => {
  return (
    <>
      <Container>
        <SectionTitleMobile>VENUE</SectionTitleMobile>
        <SectionTitleContainer>
          <SectionTitle>VENUE</SectionTitle>
        </SectionTitleContainer>
        <EventLeft>
          <h3>Where’s AA happening?</h3>
          <p>
            In Longyearbyen, the world’s northernmost urban community.
            <br />
            <br />
            Longyearbyen is in Spitsbergen, the largest island of Svalbard, a
            Norwegian archipelago full of deserts and glaciers
            <br />
            <br />
            60% of Svalbard is covered in ice, making it ideal for the “The
            Doomsday vault” — the global reserve for our world’s seeds,
            representing 13,000 years of agricultural history.
            <br />
            <br />
            Added bonus: Svalbard’s a visa-free zone. Anyone can come and live
            here.
            <br />
            <br />
            P.S. It's one of the northernmost settlements on planet Earth with
            rugged Arctic landscapes and fascinating wildlife — polar bears,
            reindeers, Arctic foxes, and Narwhals aka the unicorn of the sea.
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

      <ContainerBottomImages>
        <img src={venue1} alt="venue1" />
        <img src={venue2} alt="venue2" />
        <img src={venue3} alt="venue3" />
      </ContainerBottomImages>
    </>
  );
};

export default Venue;
