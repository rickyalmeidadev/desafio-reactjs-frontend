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
`;

export const ControlsSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${props => props.theme.margins.larger};

  > h1 {
    font-size: 4rem;
    font-weight: 600;
  }

  @media (max-width: 370px) {
    > h1 {
      display: none;
    }

    > button {
      margin: auto;
    }
  }
`;

export const Grid = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 450px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${props => props.theme.margins.larger};
  }

  @media (min-width: 626px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${props => props.theme.margins.larger};
  }

  @media (min-width: 824px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${props => props.theme.margins.larger};
  }
`;

export const NoNavers = styled.span`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: ${props => props.theme.margins.larger};
`;
