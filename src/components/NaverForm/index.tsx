import React from 'react';

import {
  Formik,
  FormikHelpers,
  Field as FormikField,
  FieldProps,
  ErrorMessage,
} from 'formik';

import moment from 'moment';

import { useHistory } from 'react-router-dom';
import { Form, FieldError, SpanError } from './styles';
import { Field, Button } from '..';
import schema from './validation';
import { create } from '../../services/api';

interface IFormValues {
  name: string;
  jobRole: string;
  age: string;
  yearsSinceAdmission: string;
  project: string;
  url: string;
  addError: string;
}

const NaverForm: React.FC = () => {
  const history = useHistory();

  const handleSubmit = async (
    values: IFormValues,
    { setErrors, resetForm }: FormikHelpers<IFormValues>,
  ) => {
    try {
      const { name, jobRole, age, yearsSinceAdmission, project, url } = values;

      const currentYear = new Date().getFullYear();

      const birthdate = new Date().setFullYear(currentYear - Number(age));
      const admissionDate = new Date().setFullYear(
        currentYear - Number(yearsSinceAdmission),
      );

      await create({
        name,
        project,
        url,
        job_role: jobRole,
        birthdate: moment(birthdate).format('DD/MM/YYYY'),
        admission_date: moment(admissionDate).format('DD/MM/YYYY'),
      });

      resetForm();
      history.push('/');
    } catch (error) {
      console.error(error);

      setErrors({
        addError: 'Falha ao adicionar Naver',
      });
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        jobRole: '',
        age: '',
        yearsSinceAdmission: '',
        project: '',
        url: '',
        addError: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <FormikField name="name">
            {({ field }: FieldProps) => (
              <Field
                {...field}
                type="text"
                label="Nome"
                name="name"
                placeholder="Nome"
              >
                <ErrorMessage name="name" component={FieldError} />
              </Field>
            )}
          </FormikField>
          <FormikField name="jobRole">
            {({ field }: FieldProps) => (
              <Field
                {...field}
                type="text"
                label="Cargo"
                name="jobRole"
                placeholder="Cargo"
              >
                <ErrorMessage name="jobRole" component={FieldError} />
              </Field>
            )}
          </FormikField>
          <FormikField name="age">
            {({ field }: FieldProps) => (
              <Field
                {...field}
                type="text"
                label="Idade"
                name="age"
                placeholder="Idade"
              >
                <ErrorMessage name="age" component={FieldError} />
              </Field>
            )}
          </FormikField>
          <FormikField name="yearsSinceAdmission">
            {({ field }: FieldProps) => (
              <Field
                {...field}
                type="text"
                label="Tempo de empresa"
                name="yearsSinceAdmission"
                placeholder="Tempo de empresa"
              >
                <ErrorMessage
                  name="yearsSinceAdmission"
                  component={FieldError}
                />
              </Field>
            )}
          </FormikField>
          <FormikField name="project">
            {({ field }: FieldProps) => (
              <Field
                {...field}
                type="text"
                label="Projetos que participou"
                name="project"
                placeholder="Projetos que participou"
              >
                <ErrorMessage name="project" component={FieldError} />
              </Field>
            )}
          </FormikField>
          <FormikField name="url">
            {({ field }: FieldProps) => (
              <Field
                {...field}
                type="text"
                label="URL da foto do Naver"
                name="url"
                placeholder="URL da foto do Naver"
              >
                <ErrorMessage name="url" component={FieldError} />
              </Field>
            )}
          </FormikField>
          <ErrorMessage name="addError" component={SpanError} />
          <Button type="submit">Salvar</Button>
        </Form>
      )}
    </Formik>
  );
};

export default NaverForm;
