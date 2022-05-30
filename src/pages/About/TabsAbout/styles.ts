import styled, { css } from "styled-components";

export const ContainerNav = styled.div`
  @media (max-width: 600px) {
    overflow: scroll;
    max-width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const TabNav = styled.div`
  margin-bottom: 20px;
  min-width: 600px;
  display: flex;
  align-items: center;

  @media (min-width: 600px) {
    justify-content: center;
  }
`;

export const NavActive = styled.a<{ active: boolean }>`
  color: white;
  font-size: 16px;
  font-family: FugazOne;
  cursor: pointer;

  & {
    &:hover {
      filter: brightness(0.8);
    }

    margin-right: 55px;

    &:last-child {
      margin-right: 0;
    }
  }

  ${({ active }) =>
    active &&
    css`
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
        width: 50%;
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
    `}
`;

export const TabComponent = styled.div``;
