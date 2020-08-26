import React, { SyntheticEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { useModal } from '../../hooks/useModal';
import { useNavers } from '../../hooks/useNavers';

import { ReactComponent as Trash } from '../../assets/icons/trash.svg';
import { ReactComponent as Pencil } from '../../assets/icons/pencil.svg';

import { NaverCardSkeleton } from '..';
import { Container, Picture, Name, Role, Icons } from './styles';

import imagePlaceholder from '../../assets/images/image-placeholder.png';

interface IProps {
  id: string;
  url: string;
  name: string;
  job_role: string;
}

const NaverCard: React.FC<IProps> = ({ id, url, name, job_role }) => {
  const { handleDeleteToggle } = useModal();
  const { handleSelectNaver, handleSelectNaverId, isLoading } = useNavers();

  const history = useHistory();

  const handleBrokenImg = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = imagePlaceholder;
  };

  const handleAskToConfirm = () => {
    handleSelectNaverId(id);
    handleDeleteToggle();
  };

  const handleNavigateToEdit = () => {
    history.push(`/edit/${id}`);
  };

  return (
    <Container>
      {isLoading ? (
        <NaverCardSkeleton />
      ) : (
        <>
          <Picture
            onError={handleBrokenImg}
            src={url}
            alt={url}
            onClick={() => handleSelectNaver(id)}
          />
          <Name onClick={() => handleSelectNaver(id)}>{name}</Name>
          <Role>{job_role}</Role>
          <Icons>
            <Trash onClick={handleAskToConfirm} />
            <Pencil onClick={handleNavigateToEdit} />
          </Icons>
        </>
      )}
    </Container>
  );
};

export default NaverCard;
