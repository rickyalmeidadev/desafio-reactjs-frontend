import styled, { css } from 'styled-components';

interface IProps {
  fullWidth?: boolean;
}

export const CustomButton = styled.button<IProps>`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  min-width: 176px;

  background-color: ${props => props.theme.colors.dark};
  border: none;

  padding: ${props => props.theme.paddings.normal};

  font-weight: 600;
  font-size: 1.4rem;

  color: ${props => props.theme.colors.light};
`;
