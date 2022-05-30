import React from "react";

import Banner from "./Banner";
import TabsAbout from "./TabsAbout";

import { Container, SectionsContainer } from "./styles";

const About: React.FC = () => {
  return (
    <>
      <Banner />

      <Container>
        <SectionsContainer>
          <TabsAbout
            tabs={[
              { component: <p>oi1</p>, name: "ARCTIC ARENA" },
              { component: <p>oi2</p>, name: "INFLUENCES" },
              { component: <p>oi3</p>, name: "SVALBARD" },
              { component: <p>oi4</p>, name: "VALUES" },
            ]}
          />
        </SectionsContainer>
      </Container>
    </>
  );
};

export default About;
