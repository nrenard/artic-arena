import styled, { css } from "styled-components";

import imagebg1 from "assets/imagebg1.png";
import imagebg2 from "assets/imagebg2.png";
import imagebg3 from "assets/imagebg3.png";
import imagebg4 from "assets/imagebg4.png";
import imagebg6 from "assets/imagebg6.png";
import points from "assets/pointsImage.png";

export const Container = styled.div<{
  variation3?: boolean;
  variation4?: boolean;
  variation6?: boolean;
}>`
  padding: 4px;
  position: relative;
  ${({ variation6 }) =>
    !variation6
      ? css`
          background: url(${imagebg1});
          background-repeat: no-repeat;
          background-size: contain;
        `
      : css`
          background: url(${imagebg4});
          background-repeat: no-repeat;
          background-size: 100% 100%;
        `}

  ${({ variation6 }) =>
    !variation6
      ? css`
          @media (min-width: 768px) {
            padding: 10px;
          }
        `
      : css`
          padding: 25px 15px 25px 20px;
        `}

  ${({ variation3 }) =>
    variation3 &&
    css`
      &:before {
        background: url(${points});
        content: "";
        padding: 1px;
        background-size: contain;
        height: 50px;
        width: 29%;
        position: absolute;
        right: 12px;
        top: -36px;
        background-repeat: no-repeat;
        transform: rotate(180deg);
      }
    `}

  ${({ variation4 }) =>
    variation4 &&
    css`
      &:after {
        background: url(${points});
        content: "";
        padding: 1px;
        background-size: contain;
        height: 50px;
        width: 29%;
        position: absolute;
        left: 12px;
        bottom: -36px;
        background-repeat: no-repeat;
      }
    `}
`;

export const SecondBg = styled.div<{
  variation1?: boolean;
  variation5?: boolean;
}>`
  ${({ variation1 }) =>
    variation1 &&
    css`
      background: url(${imagebg2});
      background-repeat: no-repeat;
      background-size: contain;
      padding: 1px;
      background-position: bottom;
    `}

  ${({ variation5 }) =>
    variation5 &&
    css`
      &:after {
        background: url(${imagebg6});
        content: "";
        padding: 1px;
        background-size: contain;
        height: 67%;
        width: 99%;
        position: absolute;
        left: 9px;
        bottom: -11px;
        background-repeat: no-repeat;
      }
    `}
`;

export const ThirdBg = styled.div<{ variation2?: boolean }>`
  ${({ variation2 }) =>
    variation2 &&
    css`
      &:after {
        background: url(${imagebg3});
        content: "";
        padding: 1px;
        height: 28%;
        position: absolute;
        left: 10px;
        top: 0px;
      }
    `}
`;

export const Image = styled.img``;
