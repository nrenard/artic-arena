import styled from 'styled-components';

export const SocialContainer = styled.div`
  a {
    margin-right: 15px;

    &:last-child {
      margin-right: 0px;
    }

    & {
      @media (min-width: 1000px) {
        margin-right: 25px;

        &:last-child {
          margin-right: 0px;
        }
      }
    }
    cursor: pointer;
  }
`;
