import React, { SyntheticEvent } from 'react';
import { useModal } from '../../hooks/useModal';

import { INaver } from '../../services/api';

import { ReactComponent as Trash } from '../../assets/icons/trash.svg';
import { ReactComponent as Pencil } from '../../assets/icons/pencil.svg';

import { Container, Picture, Name, Role, Icons } from './styles';

import picture from '../../assets/images/naver-example.png';

interface IProps extends INaver {
  handleSelectedNavers: (id: string) => void;
}

const NaverCard: React.FC<IProps> = ({
  id,
  url,
  name,
  job_role,
  handleSelectedNavers,
}) => {
  const { handleNaverToggle } = useModal();

  const handleBrokenImg = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = picture;
  };

  const handleNaver = () => {
    handleSelectedNavers(id);
    handleNaverToggle();
  };

  return (
    <Container>
      <Picture
        onError={handleBrokenImg}
        src={url}
        alt={url}
        onClick={handleNaver}
      />
      <Name onClick={handleNaver}>{name}</Name>
      <Role>{job_role}</Role>
      <Icons>
        <Trash />
        <Pencil />
      </Icons>
    </Container>
  );
};

export default NaverCard;
