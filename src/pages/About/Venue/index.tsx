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
          <h3>Where’s ARA happening?</h3>
          <p>
            In Longyearbyen, the world’s northernmost city with all amenities of
            a modern town, including hotels, and restaurants. Most importantly:
            the fastest internet in the world. Longyearbyen is futuristic and
            traditional, where the old meets the new and nature meets
            technology.
            <br />
            <br />
            It is located in Spitsbergen, the largest island of the Svalbard
            archipelago with rugged Arctic landscapes and fascinating wildlife —
            polar bears, reindeers, arctic foxes, and Narwhals aka the unicorn
            of the sea.
            <br />
            <br />
            Arctic Arena will happen across all of Longyearbyen in locations
            chosen to accommodate each part of the event in a dynamic way. So,
            people can enjoy gaming and sightseeing throughout all venues (and
            the whole town).
            <br />
            <br />
            Added bonus: Svalbard’s a visa-free zone. Anyone can come here and
            have a good time.
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
