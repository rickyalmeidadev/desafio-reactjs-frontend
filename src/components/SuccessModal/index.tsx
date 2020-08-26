import React from 'react';
import { useModal } from '../../hooks/useModal';

import { Container, Close } from './styles';
import { ModalWrapper } from '..';

interface IProps {
  title: string;
  message: string;
  handleGoBack?: () => void;
}

const SucessModal: React.FC<IProps> = ({ title, message, handleGoBack }) => {
  const { successToggle, handleSuccessToggle } = useModal();

  const handleEscapeModal = () => {
    handleSuccessToggle();
    if (handleGoBack) {
      handleGoBack();
    }

    window.scrollTo(0, 0);
  };

  return (
    <ModalWrapper isShowing={successToggle}>
      <Container>
        <Close onClick={handleEscapeModal} />
        <h2>{title}</h2>
        <p>{message}</p>
      </Container>
    </ModalWrapper>
  );
};

export default SucessModal;
