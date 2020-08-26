import React, { useEffect, useState } from 'react';

import GridLoader from 'react-spinners/GridLoader';

import { Formik, FormikHelpers, FormikProps } from 'formik';

import moment from 'moment';

import { useParams, useHistory } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';

import { Field, Button } from '..';
import { Form, SpanError, Loading } from './styles';

import schema from './validation';
import { show, create, update } from '../../services/api';
import { useNavers } from '../../hooks/useNavers';

interface IFormValues {
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
  const [formValues, setFormValues] = useState({
    name: '',
    jobRole: '',
    birthdate: '',
    admissionDate: '',
    project: '',
    url: '',
  });

  const { handleSuccessToggle } = useModal();
  const { handleLoading } = useNavers();

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

          setFormValues(prevState => ({
            ...prevState,
            name,
            project,
            url,
            birthdate: moment(birthdate).format('YYYY-MM-DD'),
            admissionDate: moment(admission_date).format('YYYY-MM-DD'),
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
