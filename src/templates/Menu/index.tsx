import React from "react";

import LogoText from "assets/logo-text.png";
import instagram from "assets/instagram.png";
import discord from "assets/discord.png";
import youtube from "assets/youtube.png";
import twitter from "assets/twitter.png";
import facebook from "assets/facebook.png";
import twitch from "assets/twitch.png";

import {
  Container,
  Wrapper,
  LogoContainer,
  MenuContainer,
  SocialContainer,
  LeftContent,
} from "./styles";

const Menu: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <LeftContent>
          <LogoContainer>
            <img src={LogoText} alt="Artic Arena" />
          </LogoContainer>

          <MenuContainer>
            <nav>
              <a>About</a>
              <a>Event</a>
            </nav>
          </MenuContainer>
        </LeftContent>

        <SocialContainer>
          <nav>
            <a>
              <img src={twitch} alt="twitch" />
            </a>
            <a>
              <img src={discord} alt="discord" />
            </a>
            <a>
              <img src={twitter} alt="twitter" />
            </a>
            <a>
              <img src={youtube} alt="youtube" />
            </a>
            <a>
              <img src={facebook} alt="facebook" />
            </a>
            <a>
              <img src={instagram} alt="instagram" />
            </a>
          </nav>
        </SocialContainer>
      </Container>
    </Wrapper>
  );
};

export default Menu;
