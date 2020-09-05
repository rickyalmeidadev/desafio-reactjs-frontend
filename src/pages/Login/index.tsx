import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import GridLoader from 'react-spinners/GridLoader';

import { authenticate, ICredentials } from '../../services/api';
import schema from './validation';
import setTitle from '../../utils/title';
import { Field, Button } from '../../components';
import { Container, Content, Form, Logo, SpanError, Loading } from './styles';
import logo from '../../assets/images/logo.png';

const Login: React.FC = () => {
  const history = useHistory();

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    status,
    setStatus,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: async (values: ICredentials) => {
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
    },
  });

  useEffect(() => {
    setTitle('Login');
  }, []);

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Logo src={logo} alt="nave.rs" />
          <Field
            name="email"
            label="E-mail"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
          />
          <Field
            type="password"
            name="password"
            label="Senha"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            touched={touched.password}
          />

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
      </Content>
    </Container>
  );
};

export default Login;
