import React from 'react';
import { useModal } from '../../hooks/useModal';

import { Container, Close } from './styles';
import { ModalWrapper } from '..';

interface IProps {
  title: string;
  message: string;
}

const SucessModal: React.FC<IProps> = ({ title, message }) => {
  const { successToggle, handleSuccessToggle } = useModal();

  return (
    <ModalWrapper isShowing={successToggle}>
      <Container>
        <Close onClick={handleSuccessToggle} />
        <h2>{title}</h2>
        <p>{message}</p>
      </Container>
    </ModalWrapper>
  );
};

export default SucessModal;
