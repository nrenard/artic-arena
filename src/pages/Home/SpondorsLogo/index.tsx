import React from 'react';

import fakeLogo from 'assets/fake-logo.png';

import { Container } from './styles';
import Button from 'components/Button';

const SpondorsLogo: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={fakeLogo} alt="Fake Logo" />
        <img src={fakeLogo} alt="Fake Logo" />
        <img src={fakeLogo} alt="Fake Logo" />
        <img src={fakeLogo} alt="Fake Logo" />
        <img src={fakeLogo} alt="Fake Logo" />
        <img src={fakeLogo} alt="Fake Logo" />
        <img src={fakeLogo} alt="Fake Logo" />
        <img src={fakeLogo} alt="Fake Logo" />
        <img src={fakeLogo} alt="Fake Logo" />
        <img src={fakeLogo} alt="Fake Logo" />
      </div>

      <Button>GET INVOLVED</Button>
    </Container>
  );
}

export default SpondorsLogo;