import React from "react";

import LogoText from "assets/logo-text.png";

import {
  Container,
  Wrapper,
  LogoContainer,
  MenuContainer,
  LeftContent,
} from "./styles";
import SocialMenu from "components/SocialMenu";

const Menu: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <LeftContent>
          <LogoContainer>
            <img src={LogoText} alt="Artic Arena" />
          </LogoContainer>

          <MenuContainer>
            {/* <nav>
              <a>About</a>
              <a>Event</a>
            </nav> */}
          </MenuContainer>
        </LeftContent>

        <SocialMenu />
      </Container>
    </Wrapper>
  );
};

export default Menu;
