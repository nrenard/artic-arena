import React from "react";

import instagram from "assets/instagram.png";
import discord from "assets/discord.png";
import youtube from "assets/youtube.png";
import twitter from "assets/twitter.png";
import facebook from "assets/facebook.png";
import twitch from "assets/twitch.png";

import { SocialContainer } from "./styles";

const SocialMenu: React.FC = () => {
  return (
    <SocialContainer>
      <nav>
        <a href="https://www.twitch.tv/thearcticarena" target="_blank">
          <img src={twitch} alt="twitch" />
        </a>
        <a href="https://discord.gg/5PbtVQFrQF" target="_blank">
          <img src={discord} alt="discord" />
        </a>
        <a href="https://www.twitter.com/arctic_arena" target="_blank">
          <img src={twitter} alt="twitter" />
        </a>
        {/* <a href="https://www.twitter.com/arctic_arena" target="_blank">
          <img src={youtube} alt="youtube" />
        </a> */}
        <a href="https://www.facebook.com/thearcticarena/" target="_blank">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/thearcticarena/" target="_blank">
          <img src={instagram} alt="instagram" />
        </a>
      </nav>
    </SocialContainer>
  );
};

export default SocialMenu;
