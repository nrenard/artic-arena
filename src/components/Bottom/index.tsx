import SocialMenu from "components/SocialMenu";
import React from "react";

import fakeLogo from "assets/fake-logo.png";
import bigLogo from "assets/big-logo.svg";

import {
  Container,
  FirstLine,
  LogoMobile,
  SecondLine,
  WrapperBottomMenu,
  WrapperSponsors,
} from "./styles";

const Bottom: React.FC = () => {
  return (
    <Container>
      <FirstLine />
      <SecondLine />

      <LogoMobile src={bigLogo} />

      <WrapperBottomMenu>
        <SocialMenu />
      </WrapperBottomMenu>

      {/* <WrapperSponsors>
        <img src={fakeLogo} alt="Fake Logo" />
        <img src={fakeLogo} alt="Fake Logo" />
        <img src={fakeLogo} alt="Fake Logo" />
        <img src={fakeLogo} alt="Fake Logo" />
        <img src={fakeLogo} alt="Fake Logo" />
      </WrapperSponsors> */}

      <span style={{ color: "white" }}>© 2022 Arctic Arena</span>
    </Container>
  );
};

export default Bottom;
