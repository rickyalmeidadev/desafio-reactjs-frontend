import React, { ButtonHTMLAttributes } from 'react';

import { CustomButton } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  noFill?: boolean;
}

const Button: React.FC<Props> = ({ children, fullWidth, noFill, ...rest }) => {
  return (
    <CustomButton {...rest} fullWidth={fullWidth} noFill={noFill}>
      {children}
    </CustomButton>
  );
};

export default Button;
