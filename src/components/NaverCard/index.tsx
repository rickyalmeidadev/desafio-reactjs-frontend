import React from 'react';
import { ReactComponent as Trash } from '../../assets/icons/trash.svg';
import { ReactComponent as Pencil } from '../../assets/icons/pencil.svg';

import { Container, Picture, Name, Role, Icons } from './styles';

import picture from '../../assets/images/naver-example.png';

const NaverCard: React.FC = () => {
  return (
    <Container>
      <Picture src={picture} alt="Naver" />
      <Name>Juliano Reis</Name>
      <Role>Front-end Developer</Role>
      <Icons>
        <Trash />
        <Pencil />
      </Icons>
    </Container>
  );
};

export default NaverCard;
