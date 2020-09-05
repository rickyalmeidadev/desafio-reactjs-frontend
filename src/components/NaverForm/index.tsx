import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import moment from 'moment';
import GridLoader from 'react-spinners/GridLoader';

import { useModal } from '../../hooks/useModal';
import { useNavers } from '../../hooks/useNavers';
import { create, update } from '../../services/api';
import schema from './validation';
import { Field, Button } from '..';
import { Form, SpanError, Loading } from './styles';

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

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    status,
    setStatus,
    errors,
    touched,
  } = useFormik({
    enableReinitialize: true,
    initialValues: formValues,
    validationSchema: schema,
    onSubmit: async (values: IFormValues) => {
      try {
        const {
          name,
          jobRole,
          birthdate,
          admissionDate,
          project,
          url,
        } = values;

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
    },
  });

  useEffect(() => {
    if (id) {
      fetchNaversDataForFields(id);
    }

    return () => clearForm();
  }, [id, fetchNaversDataForFields, clearForm]);

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="name"
        label="Nome"
        onChange={handleChange}
        onBlur={handleBlur}
        defaultValue={formValues.name}
        error={errors.name}
        touched={touched.name}
      />
      <Field
        name="jobRole"
        label="Cargo"
        onChange={handleChange}
        onBlur={handleBlur}
        defaultValue={formValues.jobRole}
        error={errors.jobRole}
        touched={touched.jobRole}
      />
      <Field
        type="date"
        name="birthdate"
        label="Idade"
        onChange={handleChange}
        onBlur={handleBlur}
        defaultValue={formValues.birthdate}
        error={errors.birthdate}
        touched={touched.birthdate}
      />
      <Field
        type="date"
        name="admissionDate"
        label="Data de admissão"
        onChange={handleChange}
        onBlur={handleBlur}
        defaultValue={formValues.admissionDate}
        error={errors.admissionDate}
        touched={touched.admissionDate}
      />
      <Field
        name="project"
        label="Projetos que participou"
        onChange={handleChange}
        onBlur={handleBlur}
        defaultValue={formValues.project}
        error={errors.project}
        touched={touched.project}
      />
      <Field
        name="url"
        label="URL da foto do Naver"
        onChange={handleChange}
        onBlur={handleBlur}
        defaultValue={formValues.url}
        error={errors.url}
        touched={touched.url}
      />

      {isSubmitting && (
        <Loading>
          <GridLoader size={2} />
        </Loading>
      )}

      {status && <SpanError>{status}</SpanError>}

      <Button type="submit">Salvar</Button>
    </Form>
  );
};

export default NaverForm;
