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
              Everyone gets an opportunity to participate, no bias or
              discrimination. Just like Svalbard, a place anyone can call home.
            </p>
          </Value>
          <Value>
            <h3>Honesty</h3>
            <p>
              We call it as it is. And expect the same from you. This is the
              Nordic way.
            </p>
          </Value>
          <Value>
            <h3>Sustainability</h3>
            <p>
              Sustainability Planet Earth is a gift. So, we do our best to take
              good care of our home and its inhabitants. See us in action
              (Ideally a link to the sustainability projects)
            </p>
          </Value>
        </WrappValue>
      </ContainerValues>
      <SectionTitleMobile>VALUES</SectionTitleMobile>
    </Container>
  );
};

export default Values;
