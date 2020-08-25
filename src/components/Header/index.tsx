import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Logo, Logout } from './styles';

import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('nave.rs:token');
    history.push('/login');
  };

  return (
    <Container>
      <Logo src={logo} alt="nave.rs" />
      <Logout type="button" onClick={handleLogout}>
        Sair
      </Logout>
    </Container>
  );
};

export default Header;
