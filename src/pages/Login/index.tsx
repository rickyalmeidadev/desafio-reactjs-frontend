import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Formik,
  FormikHelpers,
  Field as FormikField,
  FieldProps,
  ErrorMessage,
} from 'formik';

import { authenticate, ICredentials } from '../../services/api';

import { Field, Button } from '../../components';
import { Container, Content, Form, Logo, Error, FieldError } from './styles';

import logo from '../../assets/images/logo.png';
import schema from './validation';

interface ILogin extends ICredentials {
  loginError: string;
}

const Login: React.FC = () => {
  const history = useHistory();

  const handleSubmit = async (
    values: ILogin,
    { setErrors, resetForm }: FormikHelpers<ILogin>,
  ) => {
    try {
      const { email, password } = values;
      const response = await authenticate({ email, password });
      const { token } = response.data;
      localStorage.setItem('nave.rs:token', token);
      resetForm();
      history.push('/');
    } catch (error) {
      setErrors({
        loginError: 'Falha ao fazer login',
      });
    }
  };

  return (
    <Container>
      <Content>
        <Formik
          initialValues={{
            email: '',
            password: '',
            loginError: '',
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <Logo src={logo} alt="nave.rs" />
              <FormikField
                name="email"
                render={({ field }: FieldProps) => (
                  <Field
                    {...field}
                    type="text"
                    label="E-mail"
                    name="email"
                    placeholder="E-mail"
                  >
                    <ErrorMessage name="email" component={FieldError} />
                  </Field>
                )}
              />
              <FormikField
                name="password"
                render={({ field }: FieldProps) => (
                  <Field
                    {...field}
                    type="password"
                    label="Senha"
                    name="password"
                    placeholder="Senha"
                  >
                    <ErrorMessage name="password" component={FieldError} />
                  </Field>
                )}
              />
              <ErrorMessage name="loginError" component={Error} />
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
