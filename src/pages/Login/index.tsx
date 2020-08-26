import React from 'react';
import { useHistory } from 'react-router-dom';

import GridLoader from 'react-spinners/GridLoader';

import {
  Formik,
  FormikHelpers,
  Field as FormikField,
  FieldProps,
  ErrorMessage,
  FormikProps,
} from 'formik';

import { authenticate, ICredentials } from '../../services/api';

import { Field, Button } from '../../components';

import {
  Container,
  Content,
  Form,
  Logo,
  SpanError,
  FieldError,
  Loading,
} from './styles';

import logo from '../../assets/images/logo.png';
import schema from './validation';

const Login: React.FC = () => {
  const history = useHistory();

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
