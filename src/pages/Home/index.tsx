import React from 'react';

import {
  Header,
  Button,
  NaverCard,
  NaverModal,
  DeleteModal,
} from '../../components';

import { Container, Content, Main, ControlsSection, Grid } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <NaverModal />
      <DeleteModal />
      <Content>
        <Header />
        <Main>
          <ControlsSection>
            <h1>Navers</h1>
            <Button type="button">Adicionar Naver</Button>
          </ControlsSection>
          <Grid>
            <NaverCard />
            <NaverCard />
            <NaverCard />
            <NaverCard />
            <NaverCard />
            <NaverCard />
            <NaverCard />
            <NaverCard />
          </Grid>
        </Main>
      </Content>
    </Container>
  );
};

export default Home;
