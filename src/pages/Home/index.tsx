import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useNavers } from '../../hooks/useNavers';
import { useModal } from '../../hooks/useModal';

import {
  Header,
  Button,
  NaverCard,
  NaverModal,
  DeleteModal,
  SuccessModal,
} from '../../components';

import {
  Container,
  Content,
  Main,
  ControlsSection,
  Grid,
  NoNavers,
} from './styles';

const Home: React.FC = () => {
  const { navers, fetchNavers, isLoading } = useNavers();
  const { naverToggle } = useModal();

  const history = useHistory();

  useEffect(() => {
    fetchNavers();
  }, [fetchNavers]);

  useEffect(() => {
    if (naverToggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [naverToggle]);

  const handleNavigateToAdd = () => {
    history.push('/add');
  };

  return (
    <Container>
      <NaverModal />
      <DeleteModal />
      <SuccessModal
        title="Naver excluído"
        message="Naver excluído com sucesso!"
      />
      <Content>
        <Header />
        <Main>
          <ControlsSection>
            <h1>Navers</h1>
            <Button type="button" onClick={handleNavigateToAdd}>
              Adicionar Naver
            </Button>
          </ControlsSection>
          {!navers.length && !isLoading ? (
            <NoNavers>Sem navers por enquanto...</NoNavers>
          ) : (
            <Grid>
              {navers.map(naver => (
                <NaverCard key={naver.id} {...naver} />
              ))}
            </Grid>
          )}
        </Main>
      </Content>
    </Container>
  );
};

export default Home;
