import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  > button {
    width: 100%;
  }

  @media (min-width: 490px) {
    > div {
      flex: 1 0 calc(50% - ${props => props.theme.margins.larger});

      :nth-child(odd) {
        margin-right: ${props => props.theme.margins.larger};
      }
    }

    > button {
      margin-left: auto;
      width: auto;
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
