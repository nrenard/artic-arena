import React from "react";

import SectionTitle from "components/SectionTitle";

import {
  Container,
  Value,
  SectionTitleContainer,
  SectionTitleMobile,
  ContainerValues,
  WrappValue,
} from "./styles";

const Values: React.FC = () => {
  return (
    <Container id="section">
      <SectionTitleContainer>
        <SectionTitle>VALUES</SectionTitle>
      </SectionTitleContainer>
      <ContainerValues>
        <WrappValue>
          <Value>
            <h3>Equality</h3>
            <p>
              We are a company with zero tolerance for discrimination, bullying,
              and any forms of harassment.
              <br />
              Everyone gets an opportunity to participate, no bias or
              discrimination. Just like Svalbard, a place anyone can call home.
              <br />
              Gaming and technology are perfect fields to promote these values,
              especially when we do a lot of our work through avatars.
            </p>
          </Value>
          <Value>
            <h3>Health & Well-being</h3>
            <p>
              In gaming, there is often a lack of emphasis on health and
              well-being.
              <br />
              We wish to change that, and improve health conditions for gamers
              and their support systems all over the world. After all, e-sports
              are sports!
            </p>
          </Value>
          <Value>
            <h3>Sustainable communities</h3>
            <p>
              Sustainability here is not only a challenge, but a goal for
              survival.
              <br />
              As our little Arctic community struggled to create new industries,
              we started a digital business — all-year-round economic activity
              that doesn’t affect the environment.
              <br />
              And that has become one of our core values – creating value for
              communities while preserving the ecosystems that surround them
            </p>
          </Value>
        </WrappValue>
      </ContainerValues>
      <SectionTitleMobile>VALUES</SectionTitleMobile>
    </Container>
  );
};

export default Values;
