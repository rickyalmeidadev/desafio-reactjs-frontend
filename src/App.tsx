import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import theme from './assets/styles/theme';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
