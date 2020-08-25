import React from 'react';
import { useModal } from '../../hooks/useModal';

import { Container } from './styles';
import { ModalWrapper, Button } from '..';

const DeleteModal: React.FC = () => {
  const { deleteToggle, handleDeleteToggle } = useModal();

  return (
    <ModalWrapper isShowing={deleteToggle}>
      <Container>
        <h2>Excluir Naver</h2>
        <p>Tem certeza que deseja excluir este Naver?</p>

        <section>
          <Button noFill type="button" onClick={handleDeleteToggle}>
            Cancelar
          </Button>
          <Button type="button">Excluir</Button>
        </section>
      </Container>
    </ModalWrapper>
  );
};

export default DeleteModal;
