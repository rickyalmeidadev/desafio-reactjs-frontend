import styled from 'styled-components';

import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  > button {
    margin-left: auto;
  }

  @media (min-width: 450px) {
    > div {
      flex: 1 0 calc(50% - ${props => props.theme.margins.larger});

      :nth-child(odd) {
        margin-right: ${props => props.theme.margins.larger};
      }
    }
  }
`;

export const SpanError = styled.span`
  position: absolute;
  color: #9a1306;
  bottom: ${props => props.theme.margins.normal};
  right: 200px;
`;

export const Loading = styled.span`
  position: absolute;
  bottom: ${props => props.theme.margins.normal};
  right: 200px;
`;
