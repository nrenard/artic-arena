import styled from "styled-components";
import { simpleFlex } from "theme/mixins";

export const Container = styled.div`
  margin-top: 120px;
  @media (min-width: 769px) {
    margin-top: 140px;
  }
  display: flex;
  position: relative;
  margin-bottom: 100px;

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

export const ContainerValues = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const WrappValue = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 769px) {
    margin-left: 140px;
  }

  @media (max-width: 769px) {
    flex-direction: column;

    h3:first-child {
      margin-top: 25px;
    }
  }
`;

export const Value = styled.div`
  flex: 1;
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

  p {
    font-size: 14px;
    margin-bottom: 25px;
    line-height: 24.22px;
    font-weight: 400;
    color: var(--white);
  }

  @media (min-width: 769px) {
    margin-right: 22px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

export const SectionTitleContainer = styled.div`
  position: absolute;
  top: -30px;

  @media (max-width: 1100px) {
    display: none;
  }
`;
