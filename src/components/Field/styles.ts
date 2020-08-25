import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${props => props.theme.margins.larger};

  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.dark};

  margin-bottom: ${props => props.theme.margins.smaller};
`;

export const Input = styled.input`
  width: 100%;

  background-color: ${props => props.theme.colors.light};
  border: 1px solid ${props => props.theme.colors.shade};

  padding: ${props => props.theme.paddings.normal};

  color: ${props => props.theme.colors.dark};

  ::placeholder {
    color: ${props => props.theme.colors.gray};
  }
`;
