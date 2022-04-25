import styled from "styled-components";
import { simpleFlex } from "theme/mixins";

export const Container = styled.div`
  ${simpleFlex("center")};
  flex-direction: column;

  p {
    color: white;
  }
`;

export const SectionsContainer = styled.div`
  ${simpleFlex("center")}
  width: 90%;
  max-width: 1280px;
  flex-direction: column;
`;
