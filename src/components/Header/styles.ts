import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 85px;

  margin-bottom: ${props => props.theme.margins.larger};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 37px;
`;

export const Logout = styled.button`
  background-color: unset;
  border: none;

  font-weight: 600;
  font-size: 1.4rem;
`;
