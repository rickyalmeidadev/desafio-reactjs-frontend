import React, { useEffect, useState } from 'react';

import GridLoader from 'react-spinners/GridLoader';

import {
  Formik,
  FormikHelpers,
  Field as FormikField,
  FieldProps,
  ErrorMessage,
  FormikProps,
} from 'formik';

import moment from 'moment';

import { useParams, useHistory } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';

import { Field, Button } from '..';
import { Form, FieldError, SpanError, Loading, FieldLoading } from './styles';

import schema from './validation';
import { create, show, update } from '../../services/api';
import { useNavers } from '../../hooks/useNavers';

interface IFormValues {
  name: string;
  jobRole: string;
  age: string;
  yearsSinceAdmission: string;
  project: string;
  url: string;
  addError: string;
}

interface IParams {
  id: string;
}

interface IProps {
  method: 'PUT' | 'POST';
}

const NaverForm: React.FC<IProps> = ({ method }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    jobRole: '',
    age: '',
    yearsSinceAdmission: '',
    project: '',
    url: '',
    addError: '',
  });

  const { handleSuccessToggle } = useModal();
  const { isLoading, handleLoading } = useNavers();

  const history = useHistory();
  const { id } = useParams() as IParams;

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          handleLoading();

          const response = await show(id);

          const {
            name,
            job_role,
            project,
            url,
            birthdate,
            admission_date,
          } = response.data;

          const age = String(
            new Date().getFullYear() - new Date(birthdate).getFullYear(),
          );

          const yearsSinceAdmission = String(
            new Date().getFullYear() - new Date(admission_date).getFullYear(),
          );

          setFormValues(prevState => ({
            ...prevState,
            name,
            project,
            url,
            age,
            yearsSinceAdmission,
            jobRole: job_role,
          }));
        } catch (error) {
          history.push('/');
        } finally {
          handleLoading();
        }
      })();
    }
  }, [id, handleLoading, history]);

  const handleSubmit = async (
    values: IFormValues,
    { setErrors }: FormikHelpers<IFormValues>,
  ) => {
    try {
      const { name, jobRole, age, yearsSinceAdmission, project, url } = values;

      const currentYear = new Date().getFullYear();

      const birthdate = new Date().setFullYear(currentYear - Number(age));
      const admissionDate = new Date().setFullYear(
        currentYear - Number(yearsSinceAdmission),
      );

      const data = {
        name,
        project,
        url,
        job_role: jobRole,
        birthdate: moment(birthdate).format('DD/MM/YYYY'),
        admission_date: moment(admissionDate).format('DD/MM/YYYY'),
      };

      if (method === 'POST') {
        await create(data);
      } else {
        await update(id, data);
      }

      handleSuccessToggle();
    } catch (error) {
      setErrors({
        addError: 'Falha ao adicionar Naver',
      });
    }
  };

  return (
    <Formik
      initialValues={formValues}
      enableReinitialize
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }: FormikProps<IFormValues>) => (
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
                <>
                  <ErrorMessage name="name" component={FieldError} />
                  {isLoading && (
                    <FieldLoading>
                      <GridLoader size={2} />
                    </FieldLoading>
                  )}
                </>
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
                <>
                  <ErrorMessage name="jobRole" component={FieldError} />
                  {isLoading && (
                    <FieldLoading>
                      <GridLoader size={2} />
                    </FieldLoading>
                  )}
                </>
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
                <>
                  <ErrorMessage name="age" component={FieldError} />
                  {isLoading && (
                    <FieldLoading>
                      <GridLoader size={2} />
                    </FieldLoading>
                  )}
                </>
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
                <>
                  <ErrorMessage name="project" component={FieldError} />
                  {isLoading && (
                    <FieldLoading>
                      <GridLoader size={2} />
                    </FieldLoading>
                  )}
                </>
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
                <>
                  <ErrorMessage name="url" component={FieldError} />
                  {isLoading && (
                    <FieldLoading>
                      <GridLoader size={2} />
                    </FieldLoading>
                  )}
                </>
              </Field>
            )}
          </FormikField>

          {isSubmitting && (
            <Loading>
              <GridLoader size={2} />
            </Loading>
          )}

          <ErrorMessage name="addError" component={SpanError} />

          <Button type="submit">Salvar</Button>
        </Form>
      )}
    </Formik>
  );
};

export default NaverForm;
