import styled from 'styled-components';

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

export const Form = styled.form`
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
