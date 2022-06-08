import React from "react";

import Banner from "./Banner";
import TabsAbout from "./TabsAbout";
import ArcticArena from "./ArcticArena";
import Venue from "./Venue";

import { Container, SectionsContainer } from "./styles";

const About: React.FC = () => {
  return (
    <>
      <Banner />

      <Container>
        <SectionsContainer>
          <TabsAbout
            tabs={[
              { component: <ArcticArena />, name: "ARCTIC ARENA" },
              { component: <p>oi3</p>, name: "INFLUENCES" },
              { component: <Venue />, name: "SVALBARD" },
              { component: <p>oi4</p>, name: "VALUES" },
            ]}
          />
        </SectionsContainer>
      </Container>
    </>
  );
};

export default About;
