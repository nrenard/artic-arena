import React from "react";

import ArrowRight from "assets/arrow-right.png";

import { Container } from "./styles";

interface ButtonProps {
  onClick?(): void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Container onClick={onClick}>
      {children} <img src={ArrowRight} alt="" />
    </Container>
  );
};

export default Button;
