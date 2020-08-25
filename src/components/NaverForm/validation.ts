import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Falha ao adicionar Naver'),
  jobRole: Yup.string().required('Cargo é um campo obrigatório'),
  age: Yup.string()
    .matches(/^\d+$/, 'Apenas números para idade')
    .required('Idade é um campo obrigatório'),
  yearsSinceAdmission: Yup.string()
    .matches(/^\d+$/, 'Apenas números para tempo de empresa')
    .required('Tempo de empresa é um campo obrigatório'),
  project: Yup.string().required('Projetos é um campo obrigatório'),
  url: Yup.string()
    .min(5, 'Forneça uma URL válida')
    .required('Link para foto é um campo obrigatório'),
});

export default schema;
