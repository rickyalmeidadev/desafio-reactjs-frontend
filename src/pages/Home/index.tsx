import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useNavers } from '../../hooks/useNavers';

import {
  Header,
  Button,
  NaverCard,
  NaverModal,
  DeleteModal,
  SuccessModal,
} from '../../components';

import { Container, Content, Main, ControlsSection, Grid } from './styles';

const Home: React.FC = () => {
  const { navers, fetchNavers } = useNavers();

  const history = useHistory();

  useEffect(() => {
    fetchNavers();
  }, [fetchNavers]);

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
          <Grid>
            {navers.map(naver => (
              <NaverCard key={naver.id} {...naver} />
            ))}
          </Grid>
        </Main>
      </Content>
    </Container>
  );
};

export default Home;
