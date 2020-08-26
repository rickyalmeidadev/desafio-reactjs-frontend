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

export const FieldError = styled.span`
  position: absolute;
  color: #9a1306;
  left: 0;
  right: 0;
  bottom: -${props => props.theme.margins.normal};

  font-size: 1.2rem;
`;

export const Loading = styled.span`
  position: absolute;
  bottom: ${props => props.theme.margins.normal};
  right: 200px;
`;

export const FieldLoading = styled.span`
  position: absolute;
  bottom: ${props => props.theme.margins.normal};
  right: ${props => props.theme.margins.normal};
`;
