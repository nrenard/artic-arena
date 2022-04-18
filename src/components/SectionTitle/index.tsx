import React from "react";

import sectionimg from "assets/sectionimg.png";

import { Container } from "./styles";

const SectionTitle: React.FC = ({ children }) => {
  return (
    <Container>
      <p>{children}</p>
      <img src={sectionimg} />
    </Container>
  );
};

export default SectionTitle;
