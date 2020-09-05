import React, { InputHTMLAttributes } from 'react';
import GridLoader from 'react-spinners/GridLoader';

import { useNavers } from '../../hooks/useNavers';
import { Wrapper, Label, Input, FieldError, FieldLoading } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
  touched?: boolean;
}

const Field: React.FC<IProps> = ({ label, name, error, touched, ...rest }) => {
  const { isLoading } = useNavers();

  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input {...rest} name={name} id={name} placeholder={label} />

      {error && touched ? <FieldError>{error}</FieldError> : null}

      {isLoading && (
        <FieldLoading>
          <GridLoader size={2} />
        </FieldLoading>
      )}
    </Wrapper>
  );
};

export default React.memo(Field);
