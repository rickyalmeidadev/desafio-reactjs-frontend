import React from 'react';

import { Header, NaverForm } from '../../components';
import { Container, Content, Main, NavigationSection } from './styles';

import { ReactComponent as BackArrow } from '../../assets/icons/arrow-back.svg';

const AddNaver: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header />
        <Main>
          <NavigationSection>
            <BackArrow />
            <h1>Adicionar Naver</h1>
          </NavigationSection>

          <NaverForm />
        </Main>
      </Content>
    </Container>
  );
};

export default AddNaver;
