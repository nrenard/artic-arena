import styled from "styled-components";

export const Container = styled.div`
  font-family: "Anthu";
  color: #fff5e1;
  font-size: 20px;
  line-height: 32px;
  font-weight: 400;

  p {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    margin-bottom: 15px;
  }

  display: flex;
  align-items: center;
  flex-direction: column;
`;
