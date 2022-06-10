import styled, { css } from "styled-components";
import { container, simpleFlex } from "theme/mixins";

import bg from "assets/bgaboutopacity.png";
import bgabouttop from "assets/bgabouttop.png";

export const Container = styled.div<{ bgActive: number }>`
  ${simpleFlex("center")};
  flex-direction: column;

  p {
    color: white;
  }

  @media (min-width: 769px) {
    ${({ bgActive }) =>
      bgActive === 0 &&
      css`
        background: url(${bgabouttop});
        background-position: 0px -28px;
        background-repeat: no-repeat;
      `}
  }

  ${({ bgActive }) =>
    bgActive === 2 &&
    css`
      background: url(${bg});
      background-position: bottom;
      background-repeat: no-repeat;
    `}
`;

export const SectionsContainer = styled.div`
  ${simpleFlex("center")}
  ${container};
  flex-direction: column;
  margin-top: 40px;
`;

export const SocialLinks = styled.div`
  margin-bottom: 100px;

  a {
    display: inline-block;
    margin-right: 50px;

    &:last-child {
      margin-right: 0px;
    }
  }

  @media (max-width: 769px) {
    .desk {
      display: none;
    }

    img {
      width: 18px;
    }

    a {
      margin-right: 18px;
    }
  }
`;
