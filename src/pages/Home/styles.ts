import styled from "styled-components";

import { container, simpleFlex } from "theme/mixins";

export const Container = styled.div`
  ${simpleFlex("center")};
  flex-direction: column;

  p {
    color: white;
  }
`;

export const SectionsContainer = styled.div`
  ${simpleFlex("center")}
  ${container};
  flex-direction: column;
`;
