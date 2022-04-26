import styled from "styled-components";

import { simpleFlex } from "theme/mixins";

import arrowBorder from "assets/arrow-border.svg";
import dashedsLine from "assets/dasheds-line.svg";
import arrowDown from "assets/arrow-down.svg";

export const Container = styled.div`
  min-height: calc(100vh - 94px);
  position: relative;
  background: radial-gradient(
    50.43% 50.43% at 49.78% 49.57%,
    rgba(91, 9, 154, 0.4) 0%,
    rgba(168, 64, 247, 0) 100%
  );
  width: 100%;
  display: flex;
  justify-content: center;

  > div {
    ${simpleFlex('space-between')}
    flex-direction: column;
  }
`;

export const WrapperBannerContent = styled.div`
  padding: 40px 20px 0;
  position: relative;
  z-index: 1;
`;

export const TextPrincipal = styled.h1`
  font-size: 62px;
  line-height: 65px;
  background: linear-gradient(
    to right,
    var(--yellow-500),
    var(--yellow-500),
    var(--pink-500)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  max-width: 512px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    margin: 20px auto 0;
  }
`;

export const TextSecond = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 16px;
    margin-top: 5px;
    color: var(--yellow-500);
    font-weight: 400;
    text-align: center;
  }
  width: 100%;

  &:after {
    display: block;
    max-width: 490px;
    width: 100%;
    height: 20px;
    content: "";
    background: url(${arrowBorder}) center;
    margin: 7px auto 0;
    margin-left: 29px;
  }

  @media (max-width: 768px) {
    h2 {
      max-width: 241px;
      margin-bottom: 18px;
    }
    &:after {
      margin-left: 6px;
    }
  }
`;

export const TopImages = styled.div`
  ${simpleFlex()}
  flex-direction: column;
  position: relative;

  img {
    &:last-child {
      position: absolute;
      bottom: 80px;
    }
  }

  @media (max-width: 768px) {
    img {
      &:last-child {
        bottom: 10px;
      }
    }
  }
`;

export const MountainImage = styled.img`
  position: absolute;
  bottom: 0;
`;

export const StartButton = styled.a`
  font-family: "Anthu";
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 3px;
  font-weight: 400;
  cursor: pointer;
  color: var(--white);
  flex-direction: column;
  margin-top: 35px;
  transform: translate(0, 50px);
  ${simpleFlex('space-between')};
  z-index: 1;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 3px;
    height: 45px;
    background: url(${dashedsLine}) center;
    margin-bottom: 5px;
  }

  &::after {
    content: "";
    display: block;
    width: 15px;
    height: 20px;
    background: url(${arrowDown}) center;
    margin-top: 5px;
  }
`;
