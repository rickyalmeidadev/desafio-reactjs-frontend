import styled from 'styled-components';

import { Form as FormikForm } from 'formik';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  min-height: 100vh;

  margin: 0 auto;
  padding: ${props => props.theme.paddings.normal};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled(FormikForm)`
  position: relative;
  width: 100%;
  max-width: 448px;

  border: 1px solid ${props => props.theme.colors.shade};

  padding: ${props => props.theme.paddings.larger};

  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    margin: ${props => props.theme.margins.normal};
  }
`;

export const Logo = styled.img`
  margin-bottom: ${props => props.theme.margins.larger};
`;

export const SpanError = styled.span`
  position: absolute;
  color: #9a1306;
  bottom: 110px;
`;

export const FieldError = styled(SpanError)`
  left: 0;
  bottom: -${props => props.theme.margins.normal};

  font-size: 1.2rem;
`;

export const Loading = styled.span`
  position: absolute;
  bottom: 110px;
`;
