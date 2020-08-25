import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Email é um campo obrigatório'),
  password: Yup.string()
    .min(5, 'Mínimo 6 digitos')
    .required('Senha é um campo obrigatório'),
});

export default schema;
