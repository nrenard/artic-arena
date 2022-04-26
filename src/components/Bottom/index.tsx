import SocialMenu from 'components/SocialMenu';
import React from 'react';

import fakeLogo from 'assets/fake-logo.png';

import { Container, FirstLine, SecondLine, WrapperBottomMenu, WrapperSponsors } from './styles';

const Bottom: React.FC = () => {
  return (
    <Container>
      <FirstLine />
      <SecondLine />

      <WrapperBottomMenu>
        <SocialMenu />
      </WrapperBottomMenu>

      <WrapperSponsors>
        <img src={fakeLogo} alt="Fake Logo" />
        <img src={fakeLogo} alt="Fake Logo" />
        <img src={fakeLogo} alt="Fake Logo" />
        <img src={fakeLogo} alt="Fake Logo" />
        <img src={fakeLogo} alt="Fake Logo" />
      </WrapperSponsors>

      <span style={{ color: "white" }}>© 2021 Arctic Arena</span>
    </Container>
  );
}

export default Bottom;