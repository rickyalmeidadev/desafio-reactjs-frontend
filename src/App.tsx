import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import theme from './assets/styles/theme';

import { ModalContextProvider } from './hooks/useModal';

import Routes from './routes';
import { NaversContextProvider } from './hooks/useNavers';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ModalContextProvider>
        <NaversContextProvider>
          <GlobalStyles />
          <Routes />
        </NaversContextProvider>
      </ModalContextProvider>
    </ThemeProvider>
  );
};

export default App;
