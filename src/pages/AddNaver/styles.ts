import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};

  margin: 0 auto;
  padding: ${props => props.theme.paddings.normal};
`;

export const Main = styled.main`
  width: 100%;
  max-width: 592px;

  margin: 0 auto;
`;

export const NavigationSection = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: ${props => props.theme.margins.larger};

  > svg {
    cursor: pointer;
  }

  > h1 {
    margin-left: ${props => props.theme.margins.large};

    font-size: 2.4rem;
    font-weight: 600;
  }
`;
