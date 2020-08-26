import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Falha ao adicionar Naver'),
  jobRole: Yup.string().required('Cargo é um campo obrigatório'),
  birthdate: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Forneça uma data válida')
    .required('Idade é um campo obrigatório'),
  admissionDate: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Forneça uma data válida')
    .required('Tempo de empresa é um campo obrigatório'),
  project: Yup.string().required('Projetos é um campo obrigatório'),
  url: Yup.string()
    .min(5, 'Forneça uma URL válida')
    .required('Link para foto é um campo obrigatório'),
});

export default schema;
