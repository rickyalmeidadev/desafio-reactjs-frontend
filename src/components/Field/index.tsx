import React, { InputHTMLAttributes } from 'react';

import { FieldProps, ErrorMessage, Field as FormikField } from 'formik';
import GridLoader from 'react-spinners/GridLoader';

import { Wrapper, Label, Input, FieldError, FieldLoading } from './styles';
import { useNavers } from '../../hooks/useNavers';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Field: React.FC<IProps> = ({ label, name, ...rest }) => {
  const { isLoading } = useNavers();

  return (
    <Wrapper>
      <FormikField name={name}>
        {({ field }: FieldProps) => (
          <>
            <Label htmlFor={name}>{label}</Label>
            <Input
              {...rest}
              {...field}
              name={name}
              id={name}
              placeholder={label}
            />
            <ErrorMessage name={name} component={FieldError} />
            {isLoading && (
              <FieldLoading>
                <GridLoader size={2} />
              </FieldLoading>
            )}
          </>
        )}
      </FormikField>
    </Wrapper>
  );
};

export default React.memo(Field);
