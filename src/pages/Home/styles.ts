import styled from "styled-components";
import { simpleFlex } from "theme/mixins";

export const Container = styled.div`
  ${simpleFlex('center')};
  flex-direction: column;

  p {
    color: white;
  }
`;
