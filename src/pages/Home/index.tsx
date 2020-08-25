import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { INaver, index, show } from '../../services/api';

import {
  Header,
  Button,
  NaverCard,
  NaverModal,
  DeleteModal,
} from '../../components';

import { Container, Content, Main, ControlsSection, Grid } from './styles';

const Home: React.FC = () => {
  const [navers, setNavers] = useState<INaver[]>([]);
  const [selectedNaver, setSelectedNaver] = useState<INaver>({} as INaver);

  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const response = await index();
        setNavers(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleSelectedNavers = async (id: string) => {
    try {
      const response = await show(id);
      setSelectedNaver(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNavigateToAdd = () => {
    history.push('/add');
  };

  return (
    <Container>
      <NaverModal {...selectedNaver} />
      <DeleteModal />
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
              <NaverCard
                key={naver.id}
                handleSelectedNavers={handleSelectedNavers}
                {...naver}
              />
            ))}
          </Grid>
        </Main>
      </Content>
    </Container>
  );
};

export default Home;
