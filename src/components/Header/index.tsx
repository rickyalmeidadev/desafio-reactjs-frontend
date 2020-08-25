import React from 'react';

import { Container, Logo, Logout } from './styles';

import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={logo} alt="nave.rs" />
      <Logout type="button">Sair</Logout>
    </Container>
  );
};

export default Header;
