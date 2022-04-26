import React from 'react';

import instagram from "assets/instagram.png";
import discord from "assets/discord.png";
import youtube from "assets/youtube.png";
import twitter from "assets/twitter.png";
import facebook from "assets/facebook.png";
import twitch from "assets/twitch.png";

import { SocialContainer } from './styles';

const SocialMenu: React.FC = () => {
  return (
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
  );
}

export default SocialMenu;