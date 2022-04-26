import styled from "styled-components";

import bmenu from "assets/bmenu.png";
import { simpleFlex } from "theme/mixins";

export const Wrapper = styled.div`
  ${simpleFlex('center')}
  padding: 8px 0px;
`;

export const Container = styled.div`
  ${simpleFlex('space-between')}
  flex: 1;
  max-width: 1280px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  ${simpleFlex()}
`;

export const LogoContainer = styled.div`
  background: radial-gradient(
    56.07% 56.07% at 49.78% 49.57%,
    rgba(91, 9, 154, 0.3) 0%,
    rgba(168, 64, 247, 0) 100%
  );
  padding: 18px 35px;
  position: relative;
  cursor: pointer;

  @media (min-width: 1000px) {
    &:after {
      background: url(${bmenu});
      content: "";
      background-size: auto;
      height: 90px;
      max-width: 385px;
      width: 100%;
      position: absolute;
      left: -60px;
      background-repeat: no-repeat;
      top: -6px;
    }
  }

  img {
    & {
      @media (min-width: 1100px) {
        margin-left: 15px;
      }
    }

    z-index: 1;
  }
`;

export const MenuContainer = styled.div`
  margin-left: 80px;

  @media (max-width: 1000px) {
    display: none;
  }

  z-index: 1;

  a {
    color: var(--white);
    font-size: 16px;
    line-height: 25.6px;
    text-transform: uppercase;
    cursor: pointer;
    margin-right: 25px;

    & {
      @media (min-width: 1100px) {
        margin-right: 45px;
      }
    }
  }
`;