import styled from 'styled-components';

export const Container = styled.article`
  max-width: 280px;

  @media (max-width: 450px) {
    margin-bottom: ${props => props.theme.margins.normal};
  }
`;

export const Picture = styled.img`
  cursor: pointer;

  width: 100%;
  margin-bottom: ${props => props.theme.margins.normal};
`;
export const Name = styled.h2`
  cursor: pointer;

  font-weight: 600;
  margin-bottom: ${props => props.theme.margins.smaller};
`;
export const Role = styled.p`
  margin-bottom: ${props => props.theme.margins.normal};
`;
export const Icons = styled.section`
  display: flex;

  > svg {
    cursor: pointer;
  }

  > svg + svg {
    margin-left: ${props => props.theme.margins.normal};
  }
`;
