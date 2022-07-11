import styled from "styled-components";
import influenceBg from "assets/influenceBg.png";
import influencesBg from "assets/influencesBg.png";
import pointsAbout1 from "assets/pointsAbout1.png";
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

export const InfluecesContainer = styled.div`
  ${simpleFlex("center")}
  flex: 1;

  @media (min-width: 769px) {
    margin-left: 50px;
  }
`;

export const InfluencesWrapp = styled.div`
  @media (min-width: 770px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px 15px;
  }

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const Influence = styled.div`
  position: relative;
  flex: 1;
  margin-bottom: 10px;

  > div {
    margin-left: 10px;
  }

  img {
    height: 230px;
  }

  @media (max-width: 769px) {
    background: url(${influencesBg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0px 5px;
  }

  @media (min-width: 769px) {
    background: url(${influenceBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .mobile {
      display: none;
    }
  }

  @media (max-width: 769px) {
    flex-direction: column;
  }

  @media (min-width: 769px) {
    ${simpleFlex("center")}
  }

  h3 {
    font-family: "FugazOne";
    font-weight: 400;
    font-size: 30px;
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
  }

  p {
    font-size: 14px;
    margin-bottom: 25px;
    line-height: 24.22px;
    font-weight: 400;
    color: var(--white);
  }

  @media (max-width: 769px) {
    margin-top: 50px;
  }

  @media (min-width: 769px) {
    padding: 10px;

    &:last-child {
      margin-right: 0px;
    }
  }

  &:before {
    background: url(${pointsAbout1});
    content: "";
    padding: 1px;
    background-size: cover;
    height: 48px;
    width: 29%;
    position: absolute;
    left: 0;
    top: -40px;
  }

  &:after {
    background: url(${pointsAbout1});
    content: "";
    padding: 1px;
    background-size: cover;
    height: 48px;
    width: 29%;
    position: absolute;
    bottom: -49px;
    right: 0px;
    transform: rotateZ(180deg);
  }

  @media (max-width: 769px) {
    &:before {
      background: url(${pointsAbout1});
      content: "";
      padding: 1px;
      background-size: cover;
      height: 48px;
      width: 29%;
      position: absolute;
      left: 0;
      top: -40px;
    }

    &:before {
      width: 57%;
    }

    &:after {
      display: none;
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
