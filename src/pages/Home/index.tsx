import React from "react";

import Banner from "./Banner";
import EventSection from "./EventSection";
import Sponsors from "./Sponsors";
import SpondorsLogo from "./SpondorsLogo";

import { Container, SectionsContainer } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Banner />

      <SectionsContainer>
        <EventSection />

        <Sponsors />
        
        <SpondorsLogo />
      </SectionsContainer>
    </Container>
  );
};

export default Home;
