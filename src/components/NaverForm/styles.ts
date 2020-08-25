import styled from 'styled-components';

export const Form = styled.form`
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
