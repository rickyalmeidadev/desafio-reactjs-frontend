import React from 'react';

import { Container, Overlay } from './styles';

interface IProps {
  isShowing: boolean;
}

const ModalWrapper: React.FC<IProps> = ({ isShowing, children }) => {
  return (
    <>
      <Container isShowing={isShowing}>{children}</Container>
      <Overlay isShowing={isShowing} />
    </>
  );
};

export default ModalWrapper;
