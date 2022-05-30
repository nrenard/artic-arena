import styled from "styled-components";
import { container } from "theme/mixins";

import mountain from "assets/mountain-about.png";
import lineabout from "assets/line-banner-about.png";
import pointsImage from "assets/pointsAbout1.png";
import pointsImage2 from "assets/pointsAbout2.png";

export const Container = styled.div`
  overflow: hidden;
`;

export const Wrapp = styled.div`
  ${container};
  margin: 0 auto;
  background: url(${mountain}),
    radial-gradient(
      50.43% 50.43% at 49.78% 75%,
      rgba(91, 9, 154, 0.4) 0%,
      rgba(168, 64, 247, 0) 100%
    );
  background-position: bottom right;
  background-repeat: no-repeat;
  position: relative;

  &:after {
    background: url(${pointsImage});
    content: "";
    position: absolute;
    width: 230px;
    height: 100px;
    bottom: 0px;
    background-repeat: no-repeat;
    background-size: contain;
  }

  &:before {
    background: url(${pointsImage2});
    content: "";
    position: absolute;
    width: 138px;
    height: 82px;
    top: -20px;
    right: -75px;
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media (max-width: 1000px) {
    & {
      background-position: bottom right 95%;
    }

    &:after {
      right: -15px;
    }

    &:before {
      display: none;
    }
  }
`;

export const TitleAndLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 75px 0px;

  &:after {
    background: url(${lineabout});
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 55px;
    left: -20px;
    background-repeat: no-repeat;
  }

  h2 {
    font-size: 100px;
    margin-top: 40px;
    background: linear-gradient(
      to right,
      var(--yellow-500),
      var(--yellow-500),
      var(--pink-500)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 1000px) {
    & {
      padding-bottom: 170px;
      padding-top: 50px;
    }

    &:after {
      top: 10px;
      left: 30px;
      height: 90%;
      background-size: cover;
    }

    h2 {
      text-align: center;
      flex: 1;
      font-size: 62px;
      margin-top: 0px;
    }

    img {
      display: none;
    }
  }
`;
