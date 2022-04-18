import styled from "styled-components";
import Bg from "../../assets/bg.png";

export default styled.div`
  background: url(${Bg}) ${({ theme }) => theme.colors.bg};
`;
