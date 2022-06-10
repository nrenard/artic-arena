import styled from "styled-components";

import { container, simpleFlex } from "theme/mixins";

export const Container = styled.div`
  span {
    display: block;
    margin: 0 auto;
    padding-bottom: 15px;
    width: 100%;
    text-align: center;
  }
`;

export const FirstLine = styled.div`
  display: block;
  background-image: linear-gradient(to bottom, #ffd260 46.21%, #e01974 97.61%);
  height: 1px;
  width: 60vw;
`;

export const SecondLine = styled.div`
  display: block;
  margin-top: 10px;
  background-image: linear-gradient(to bottom, #ffd260 46.21%, #e01974 97.61%);
  height: 1px;
  width: 90vw;
  margin-left: auto;
  margin-bottom: 10px;

  @media (min-width: 990px) {
    margin-bottom: 50px;
  }
`;

export const WrapperBottomMenu = styled.div`
  ${simpleFlex("center")};
  ${container};
  margin: 30px auto;

  @media (min-width: 990px) {
    ${simpleFlex("flex-end")};
    margin: 0 auto 70px;
  }
`;

export const WrapperSponsors = styled.div`
  ${simpleFlex("center")};
  ${container};
  margin: 0 auto 50px;
  flex-wrap: wrap;
  grid-gap: 10px;

  img {
    width: 100px;
  }
`;

export const LogoMobile = styled.img`
  display: block;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: none;
  }
`;
