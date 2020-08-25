import styled, { css } from 'styled-components';

interface IProps {
  fullWidth?: boolean;
  noFill?: boolean;
}

export const CustomButton = styled.button<IProps>`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  min-width: 176px;

  background-color: ${props =>
    props.noFill ? 'transparent' : props.theme.colors.dark};

  border: 1px solid ${props => props.theme.colors.dark};

  padding: ${props => props.theme.paddings.normal};

  font-weight: 600;
  font-size: 1.4rem;

  color: ${props =>
    props.noFill ? props.theme.colors.dark : props.theme.colors.light};
`;
