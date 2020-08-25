import React from 'react';

import { Field, Button } from '../../components';
import { Container, Content, Form, Logo } from './styles';

import logo from '../../assets/images/logo.png';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <Form>
          <Logo src={logo} alt="nave.rs" />
          <Field type="text" label="E-mail" name="email" placeholder="E-mail" />
          <Field
            type="password"
            label="Senha"
            name="password"
            placeholder="Senha"
          />
          <Button fullWidth type="submit">
            Entrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
