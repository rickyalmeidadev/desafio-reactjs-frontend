import React from 'react';
import { useHistory } from 'react-router-dom';

import { Header, NaverForm, SuccessModal } from '../../components';
import { Container, Content, Main, NavigationSection } from './styles';

import { ReactComponent as BackArrow } from '../../assets/icons/arrow-back.svg';

const AddNaver: React.FC = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Container>
      <SuccessModal
        title="Naver atualizado"
        message="Naver atualizado com sucesso!"
        handleGoBack={handleGoBack}
      />
      <Content>
        <Header />
        <Main>
          <NavigationSection>
            <BackArrow onClick={handleGoBack} />
            <h1>Adicionar Naver</h1>
          </NavigationSection>

          <NaverForm method="POST" />
        </Main>
      </Content>
    </Container>
  );
};

export default AddNaver;
