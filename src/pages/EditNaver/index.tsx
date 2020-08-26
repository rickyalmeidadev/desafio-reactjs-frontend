import React from 'react';
import { useHistory } from 'react-router-dom';

import { Header, NaverForm, SuccessModal } from '../../components';
import { Container, Content, Main, NavigationSection } from './styles';

import { ReactComponent as BackArrow } from '../../assets/icons/arrow-back.svg';

const EditNaver: React.FC = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Container>
      <SuccessModal
        title="Naver criado"
        message="Naver criado com sucesso!"
        handleGoBack={handleGoBack}
      />
      <Content>
        <Header />
        <Main>
          <NavigationSection>
            <BackArrow onClick={handleGoBack} />
            <h1>Editar Naver</h1>
          </NavigationSection>

          <NaverForm method="PUT" />
        </Main>
      </Content>
    </Container>
  );
};

export default EditNaver;
