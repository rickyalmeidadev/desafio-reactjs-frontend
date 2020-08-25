import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

export const Container = styled.article`
  position: relative;
  width: 100%;
  max-width: 592px;

  display: flex;
  flex-direction: column;

  padding: ${props => props.theme.paddings.larger};

  background-color: ${props => props.theme.colors.light};

  > h2 {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: ${props => props.theme.margins.normal};
  }

  > p {
    margin-bottom: ${props => props.theme.margins.larger};
  }
`;

export const Close = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  right: ${props => props.theme.paddings.normal};
  top: ${props => props.theme.paddings.normal};
`;
