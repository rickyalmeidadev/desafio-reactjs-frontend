import React from 'react';

import {
  Formik,
  FormikHelpers,
  Field as FormikField,
  FieldProps,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

import { authenticate, ICredentials } from '../../services/api';

import { Field, Button } from '../../components';
import { Container, Content, Form, Logo, Error, FieldError } from './styles';

import logo from '../../assets/images/logo.png';

interface ILogin extends ICredentials {
  loginError: string;
}

const Login: React.FC = () => {
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
    } catch (error) {
      setErrors({
        loginError: 'Falha ao fazer login',
      });
    }
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('Email é um campo obrigatório'),
    password: Yup.string()
      .min(5, 'Mínimo 6 digitos')
      .required('Senha é um campo obrigatório'),
  });

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
