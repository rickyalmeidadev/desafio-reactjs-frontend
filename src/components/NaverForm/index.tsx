import React, { useEffect } from 'react';

import GridLoader from 'react-spinners/GridLoader';

import { Formik, FormikHelpers, FormikProps } from 'formik';

import moment from 'moment';

import { useParams } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';

import { Field, Button } from '..';
import { Form, SpanError, Loading } from './styles';

import schema from './validation';
import { create, update } from '../../services/api';
import { useNavers } from '../../hooks/useNavers';

export interface IFormValues {
  name: string;
  jobRole: string;
  birthdate: string;
  admissionDate: string;
  project: string;
  url: string;
}

interface IParams {
  id: string;
}

interface IProps {
  method: 'PUT' | 'POST';
}

const NaverForm: React.FC<IProps> = ({ method }) => {
  const { handleSuccessToggle } = useModal();
  const { fetchNaversDataForFields, formValues, clearForm } = useNavers();

  const { id } = useParams() as IParams;

  useEffect(() => {
    if (id) {
      fetchNaversDataForFields(id);
    }

    return () => clearForm();
  }, [id, fetchNaversDataForFields, clearForm]);

  const handleSubmit = async (
    values: IFormValues,
    { setStatus }: FormikHelpers<IFormValues>,
  ) => {
    try {
      const { name, jobRole, birthdate, admissionDate, project, url } = values;

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
      setStatus('Falha ao adicionar Naver');
    }
  };

  return (
    <Formik
      initialValues={formValues}
      enableReinitialize
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, status }: FormikProps<IFormValues>) => (
        <Form>
          <Field name="name" label="Nome" />
          <Field name="jobRole" label="Cargo" />
          <Field type="date" name="birthdate" label="Idade" />
          <Field type="date" name="admissionDate" label="Data de admissão" />
          <Field name="project" label="Projetos que participou" />
          <Field name="url" label="URL da foto do Naver" />

          {isSubmitting && (
            <Loading>
              <GridLoader size={2} />
            </Loading>
          )}

          {status && <SpanError>{status}</SpanError>}

          <Button type="submit">Salvar</Button>
        </Form>
      )}
    </Formik>
  );
};

export default NaverForm;
