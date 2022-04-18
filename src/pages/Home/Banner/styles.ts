import styled from "styled-components";

import { simpleFlex } from "theme/mixins";

import arrowBorder from 'assets/arrow-border.svg'
import dashedsLine from 'assets/dasheds-line.svg'
import arrowDown from 'assets/arrow-down.svg'

export const Container = styled.div`
  min-height: calc(100vh - 94px);
  background: radial-gradient(50.43% 50.43% at 49.78% 49.57%, rgba(91, 9, 154, 0.4) 0%, rgba(168, 64, 247, 0) 100%);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0 0;

  > div {
    position: relative;
    z-index: 1;
    padding: 0 20px;

    ${simpleFlex()}
    flex-direction: column;
  }
`;

export const TextPrincipal = styled.h1`
  font-size: 62px;
  background: linear-gradient(to right, var(--yellow-500), var(--yellow-500), var(--pink-500));
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

export const TextSecond = styled.h2`
  font-size: 16px;
  color: var(--yellow-500);
  text-align: center;

  &:after {
    display: block;
    max-width: 490px;
    width: 100%;
    height: 20px;
    content: '';
    background: url(${arrowBorder}) center;
    margin: 5px auto 0;
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

export const StartButton = styled.div`
  ${simpleFlex()};
  color: var(--white);
  flex-direction: column;
  bottom: -50px;
  position: absolute;

  &::before {
    content: '';
    display: block;
    width: 3px;
    height: 45px;
    background: url(${dashedsLine}) center;
    margin-bottom: 5px;
  }

  &::after {
    content: '';
    display: block;
    width: 15px;
    height: 20px;
    background: url(${arrowDown}) center;
    margin-top: 5px;
  }
`;