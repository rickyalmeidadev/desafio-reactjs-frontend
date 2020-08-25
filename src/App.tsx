import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import theme from './assets/styles/theme';

import { ModalContextProvider } from './hooks/useModal';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ModalContextProvider>
        <GlobalStyles />
        <Routes />
      </ModalContextProvider>
    </ThemeProvider>
  );
};

export default App;
