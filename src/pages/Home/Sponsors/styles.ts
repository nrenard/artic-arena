import styled from "styled-components";
import { simpleFlex } from "theme/mixins";

export const Container = styled.div`
  margin-top: 50px;
  @media (min-width: 769px) {
    margin-top: 100px;
  }

  display: flex;
  position: relative;
  margin-bottom: 100px;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const SectionTitleMobile = styled.div`
  font-family: "Anthu";
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 3px;
  color: var(--white);

  @media (min-width: 1100px) {
    display: none;
  }
`;

export const EventLeft = styled.div`
  margin-right: 62px;

  @media (max-width: 1100px) {
    margin-right: 0px;
    margin-bottom: 45px;
  }

  flex: 1;
  h3 {
    font-family: "Anthu";
    font-weight: 400;
    font-size: 40px;
    line-height: 64px;
    letter-spacing: 2px;
    background: linear-gradient(
      to right,
      var(--yellow-500),
      var(--yellow-500),
      var(--pink-500)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 65px;
  }

  @media (max-width: 1100px) {
    h3 {
      margin-top: 45px;
    }
  }

  p {
    font-size: 14px;
    margin-bottom: 25px;
    line-height: 24.22px;
    font-weight: 400;
    color: var(--white);
  }

  @media (min-width: 1400px) {
    p {
      margin-right: 164px;
    }
  }

  margin-left: 100px;

  @media (max-width: 1100px) {
    margin-left: 0px;
  }
`;

export const SectionTitleContainer = styled.div`
  position: absolute;
  top: -30px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const ContainerImage = styled.div`
  ${simpleFlex("center")}
`;
