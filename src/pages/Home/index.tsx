import React from "react";
import Banner from "./Banner";
import EventSection from "./EventSection";
import Sponsors from "./Sponsors";

import { Container, SectionsContainer } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Banner />
      <SectionsContainer>
        <EventSection />
        <Sponsors />
      </SectionsContainer>
    </Container>
  );
};

export default Home;
