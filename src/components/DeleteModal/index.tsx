import React from 'react';

import GridLoader from 'react-spinners/GridLoader';

import { useModal } from '../../hooks/useModal';
import { useNavers } from '../../hooks/useNavers';

import { ModalWrapper, Button } from '..';
import { Container, Loading } from './styles';

const DeleteModal: React.FC = () => {
  const { deleteToggle, handleDeleteToggle } = useModal();
  const { selectedNaverId, handleDeleteNaver, isLoading } = useNavers();

  console.log(isLoading);
  return (
    <ModalWrapper isShowing={deleteToggle}>
      <Container>
        {isLoading && (
          <Loading>
            <GridLoader size={2} />
          </Loading>
        )}

        <h2>Excluir Naver</h2>
        <p>Tem certeza que deseja excluir este Naver?</p>

        <section>
          <Button noFill type="button" onClick={handleDeleteToggle}>
            Cancelar
          </Button>
          <Button
            type="button"
            onClick={() => handleDeleteNaver(selectedNaverId)}
          >
            Excluir
          </Button>
        </section>
      </Container>
    </ModalWrapper>
  );
};

export default DeleteModal;
