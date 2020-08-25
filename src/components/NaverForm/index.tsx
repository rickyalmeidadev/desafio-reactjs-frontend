import React from 'react';

import { Form } from './styles';
import { Field, Button } from '..';

const NaverForm: React.FC = () => {
  return (
    <Form>
      <Field type="text" name="name" label="Nome" placeholder="Nome" />
      <Field type="text" name="name" label="Nome" placeholder="Nome" />
      <Field type="text" name="name" label="Nome" placeholder="Nome" />
      <Field type="text" name="name" label="Nome" placeholder="Nome" />
      <Field type="text" name="name" label="Nome" placeholder="Nome" />
      <Field type="text" name="name" label="Nome" placeholder="Nome" />
      <Button type="submit">Salvar</Button>
    </Form>
  );
};

export default NaverForm;
