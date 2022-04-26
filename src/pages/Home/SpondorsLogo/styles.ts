import styled from "styled-components";
import { simpleFlex } from "theme/mixins";

export const Container = styled.div`
  margin-bottom: 75px;

  > div {
    ${simpleFlex('space-between')}
    flex-wrap: wrap;
    grid-gap: 10px;
    margin-bottom: 20px;

    img {
      max-width: 133px;
    }

    @media (min-width: 990px) {
      grid-gap: 20px;
      margin-bottom: 50px;
      
      img {
        max-width: 203px;
      }
    }
  }

  @media (min-width: 990px) {
    margin-bottom: 100px;
  }

  > button {
    margin-left: auto;
  }
`;