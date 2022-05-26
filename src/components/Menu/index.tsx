import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import LogoText from "assets/logo-text.png";
import VectorItemMenu from "assets/vector-menu.svg";
import VectorMenu from "assets/menu.svg";
import CloseMenu from "assets/close-menu.svg";

import SocialMenu from "components/SocialMenu";

import {
  Container,
  Wrapper,
  LogoContainer,
  MenuContainer,
  LeftContent,
  BarMenuContainer,
  CloseMenuMobile,
  OverFlow,
} from "./styles";

const Menu: React.FC = () => {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);

  return (
    <Wrapper>
      <Container>
        <LeftContent>
          <BarMenuContainer onClick={() => setMenuMobileOpen(true)}>
            <img src={VectorMenu} alt="Vector open menu" />
          </BarMenuContainer>
          {menuMobileOpen && (
            <OverFlow onClick={() => setMenuMobileOpen(false)} />
          )}
          <Link to="/">
            <LogoContainer>
              <img src={LogoText} alt="Artic Arena" />
            </LogoContainer>
          </Link>

          <MenuContainer menuIsOpen={menuMobileOpen}>
            <CloseMenuMobile onClick={() => setMenuMobileOpen(false)}>
              <img src={CloseMenu} alt="Close menu mobile" />
            </CloseMenuMobile>
            <nav>
              <NavLink to="about" onClick={() => setMenuMobileOpen(false)}>
                About
                <img src={VectorItemMenu} alt="Vector menu" />
              </NavLink>
            </nav>
          </MenuContainer>
        </LeftContent>

        <SocialMenu />
      </Container>
    </Wrapper>
  );
};

export default Menu;
