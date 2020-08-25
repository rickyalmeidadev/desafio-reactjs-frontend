import React from 'react';
import { useHistory } from 'react-router-dom';

import { Header, NaverForm } from '../../components';
import { Container, Content, Main, NavigationSection } from './styles';

import { ReactComponent as BackArrow } from '../../assets/icons/arrow-back.svg';

const AddNaver: React.FC = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Container>
      <Content>
        <Header />
        <Main>
          <NavigationSection>
            <BackArrow onClick={handleGoBack} />
            <h1>Adicionar Naver</h1>
          </NavigationSection>

          <NaverForm />
        </Main>
      </Content>
    </Container>
  );
};

export default AddNaver;
