import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import Banner from "./Banner";
import TabsAbout from "./TabsAbout";
import ArcticArena from "./ArcticArena";
import Venue from "./Venue";
import Values from "./Values";
import Influences from "./Influences";

import { Container, SectionsContainer } from "./styles";

const About: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const myRef = useRef<any>(null);
  const venueParams = useLocation().search;

  useEffect(() => window.scrollTo(0, 0), []);

  const executeScroll = () => myRef.current && myRef.current.scrollIntoView();

  useEffect(() => {
    if (venueParams.includes("venue")) {
      executeScroll();
      setCurrentTab(2);
    }
  }, []);

  return (
    <>
      <Banner />

      <Container bgActive={currentTab}>
        <SectionsContainer ref={myRef}>
          <TabsAbout
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            tabs={[
              { component: <ArcticArena />, name: "ARCTIC ARENA" },
              { component: <Influences />, name: "Organisers" },
              { component: <Venue />, name: "VENUE" },
              { component: <Values />, name: "VALUES" },
            ]}
          />
        </SectionsContainer>
      </Container>
    </>
  );
};

export default About;
