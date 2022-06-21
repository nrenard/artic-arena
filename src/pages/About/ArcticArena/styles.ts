import styled from "styled-components";
import { simpleFlex } from "theme/mixins";

export const Container = styled.div`
  margin-top: 120px;
  @media (min-width: 769px) {
    margin-top: 140px;
  }
  display: flex;
  position: relative;
  margin-bottom: 200px;

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
  }
`;

export const WrappVenue = styled.div`
  /* ${simpleFlex("center")} */
  display: flex;
  flex: 1;

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
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

export const EventRight = styled.div`
  margin-left: 62px;
  flex: 1;

  @media (max-width: 1100px) {
    margin-left: 0px;
    margin-bottom: 45px;
  }

  h3 {
    font-family: "Anthu";
    font-weight: 400;
    font-size: 40px;
    line-height: 45px;
    letter-spacing: 2px;
    background: linear-gradient(
      to right,
      var(--yellow-500),
      var(--yellow-500),
      var(--pink-500)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 15px;
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
`;

export const SectionTitleContainer = styled.div`
  position: absolute;
  top: -30px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;

  @media (max-width: 1100px) {
    margin-left: 0px;
  }

  flex: 1;
`;
