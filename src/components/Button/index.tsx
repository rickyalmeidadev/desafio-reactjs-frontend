import React, { ButtonHTMLAttributes } from 'react';

import { CustomButton } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

const Button: React.FC<Props> = ({ children, fullWidth, ...rest }) => {
  return (
    <CustomButton {...rest} fullWidth={fullWidth}>
      {children}
    </CustomButton>
  );
};

export default Button;
