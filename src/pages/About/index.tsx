import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import Banner from "./Banner";
import TabsAbout from "./TabsAbout";
import ArcticArena from "./ArcticArena";
import Venue from "./Venue";
import Values from "./Values";
import Influences from "./Influences";

import discord from "assets/Discord_iconbig.png";
import twitter from "assets/Twitter_iconbig.png";
import twitch from "assets/Twitch_iconbig.png";
import youtube from "assets/Youtube_iconbig.png";
import facebook from "assets/Facebook_iconbig.png";
import instagram from "assets/Instagram_iconbig.png";
import snapchat from "assets/Snapchat_iconbig.png";
import email from "assets/Email_iconbig.png";
import tiktok from "assets/Tiktok_iconbig.png";

import { Container, SectionsContainer, SocialLinks } from "./styles";

const About: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const myRef = useRef<any>(null);
  const venueParams = useLocation().search;

  useEffect(() => window.scrollTo(0, 0), [])

  const executeScroll = () => myRef.current && myRef.current.scrollIntoView();

  useEffect(() => {
    if (venueParams.includes("venue")) {
      executeScroll();
      setCurrentTab(2);
    }
  }, []);

  return (
    <>
      <Banner />

      <Container bgActive={currentTab}>
        <SectionsContainer ref={myRef}>
          <TabsAbout
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            tabs={[
              { component: <ArcticArena />, name: "ARCTIC ARENA" },
              { component: <Influences />, name: "Organisers" },
              { component: <Venue />, name: "VENUE" },
              { component: <Values />, name: "VALUES" },
            ]}
          />
        </SectionsContainer>

        <SocialLinks>
          <a href="#">
            <img src={twitch} alt="twitter" />
          </a>
          <a href="#">
            <img src={discord} alt="discord" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="#" className="desk">
            <img src={snapchat} alt="snapshat" />
          </a>
          <a href="#" className="desk">
            <img src={tiktok} alt="tiktok" />
          </a>
          <a href="#" className="desk">
            <img src={email} alt="email" />
          </a>
        </SocialLinks>
      </Container>
    </>
  );
};

export default About;
