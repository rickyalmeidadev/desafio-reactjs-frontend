import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import GridLoader from 'react-spinners/GridLoader';

import { Formik, FormikHelpers, FormikProps } from 'formik';

import { authenticate, ICredentials } from '../../services/api';

import { Field, Button } from '../../components';

import { Container, Content, Form, Logo, SpanError, Loading } from './styles';

import schema from './validation';

import setTitle from '../../utils/title';

import logo from '../../assets/images/logo.png';

const Login: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    setTitle('Login');
  }, []);

  const handleSubmit = async (
    values: ICredentials,
    { setStatus, resetForm }: FormikHelpers<ICredentials>,
  ) => {
    try {
      const { email, password } = values;
      const response = await authenticate({ email, password });
      const { token } = response.data;
      localStorage.setItem('nave.rs:token', token);
      resetForm();
      history.push('/');
    } catch (error) {
      setStatus('Falha ao fazer login');
    }
  };

  return (
    <Container>
      <Content>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, status }: FormikProps<ICredentials>) => (
            <Form>
              <Logo src={logo} alt="nave.rs" />
              <Field name="email" label="E-mail" />
              <Field type="password" name="password" label="Senha" />

              {isSubmitting && (
                <Loading>
                  <GridLoader size={2} />
                </Loading>
              )}

              {status && <SpanError>{status}</SpanError>}

              <Button fullWidth type="submit">
                Entrar
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default Login;
