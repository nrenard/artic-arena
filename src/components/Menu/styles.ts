import styled, { css } from "styled-components";

import bmenu from "assets/bmenu.png";
import { simpleFlex } from "theme/mixins";

export const Wrapper = styled.div`
  ${simpleFlex("center")}
  padding: 8px 0px;
`;

export const Container = styled.div`
  ${simpleFlex("space-between")}
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

export const MenuContainer = styled.div<{ menuIsOpen: boolean }>`
  margin-left: 80px;

  z-index: 1;

  @media (max-width: 1000px) {
    position: absolute;
    background: ${({ theme }) => theme.colors.mediumPurple};
    margin: 0;
    top: 0;
    width: 80%;
    height: 100%;
    z-index: 9;
    padding: 50px 0px 0px 40px;
    transition: 0.4s ease all;

    ${({ menuIsOpen }) =>
      menuIsOpen
        ? css`
            left: 0;
          `
        : css`
            left: -1000px;
          `}
  }

  a {
    color: var(--white);
    font-size: 16px;
    line-height: 25.6px;
    text-transform: uppercase;
    cursor: pointer;
    margin-right: 25px;

    img {
      margin-left: 10px;
    }

    &.active {
      background: linear-gradient(
        to right,
        var(--yellow-500),
        var(--yellow-500),
        var(--pink-500)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      position: relative;

      img {
        display: none;
      }

      &:after {
        content: "";
        width: 100%;
        height: 1px;
        background: linear-gradient(
          to right,
          var(--yellow-500),
          var(--yellow-500),
          var(--pink-500)
        );
        position: absolute;
        left: 0;
        bottom: -5px;
      }
    }

    & {
      @media (min-width: 1100px) {
        margin-right: 45px;
      }
    }
  }
`;

export const BarMenuContainer = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }

  cursor: pointer;
  position: absolute;
  left: 25px;
`;

export const CloseMenuMobile = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const OverFlow = styled.div`
  width: 100%;
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 8;
  background-color: #00000057;
`;
