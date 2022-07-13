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
            <h3>Health & Wellbeing</h3>
            <p>
              In gaming, there is often a lack of emphasis on health and
              well-being. We wish to change that and improve health conditions
              for gamers and their support systems all over the world. After
              all, e-sports are sports!
              <br />
              The first aspect of this is mental health. That is a hugely
              debated topic, but action rarely follows suit. There’s a reason
              young people struggle with their mental health, but we believe
              that gaming can contribute positively if people are given the
              right resources.
              <br />
              <br />
              Physical health also comes to mind. Gamers are not exactly known
              for their healthy diets. We do believe in balance though. While
              there’s nothing wrong with treats, gamers should have access to a
              balanced lifestyle which might make them even better at playing.
              We are therefore developing a programme for mental and physical
              well-being for gamers.
            </p>
          </Value>
          <Value>
            <h3>Equality</h3>
            <p>
              With two women as co-founders, we experienced a lot of challenges
              going into male-dominated occupations. But we defied all odds, and
              never gave up. Now, we want to help create a better environment
              for people, regardless of background.
              <br />
              <br />
              We are a company with zero tolerance for discrimination, bullying,
              and any form of harassment. Everyone gets an opportunity to
              participate, no bias or discrimination. Just like Svalbard, a
              place anyone can call home.
              <br />
              <br />
              Despite being a startup, we are also creating our first inclusion
              programmes, relevant to the Norwegian setting. Gaming and
              technology are perfect fields to promote these values, especially
              when we do a lot of our work through avatars.
            </p>
          </Value>
          <Value>
            <h3>Sustainable communities</h3>
            <p>
              Sustainability here is not only a challenge, but a goal for
              survival. Longyearbyen was a coal mining town for over a century.
              <br />
              <br />
              As our little Arctic community struggled to create new industries
              and become greener, we started a digital business — all-year-round
              economic activity that aims to have a lower impact on the
              environment but a positive one for local workers. We are
              concluding a study to assess how to use the most climate-friendly
              technology and offset carbon emissions where they can’t be cut. We
              are not perfect, but every product on the pipeline goes through an
              assessment, and our employees work remotely whenever possible.
              <br />
              <br />
              And that has become one of our core values – creating value for
              communities while preserving the ecosystems that surround them.
            </p>
          </Value>
        </WrappValue>
      </ContainerValues>
      <SectionTitleMobile>VALUES</SectionTitleMobile>
    </Container>
  );
};

export default Values;
