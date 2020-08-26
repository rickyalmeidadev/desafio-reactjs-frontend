import React from 'react';

import GridLoader from 'react-spinners/GridLoader';

import { Container } from './styles';

const PageLoader: React.FC = () => {
  return (
    <Container>
      <GridLoader size={16} />
    </Container>
  );
};

export default PageLoader;
