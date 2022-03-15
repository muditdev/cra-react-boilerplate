import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MyGlobalStyle } from './styles/GlobalStyle';
import { myTheme } from './styles/theme';
import { AuthProvider } from 'helpers/contexts/auth-context';
import { CssUtils } from 'styles/CssUtils';
import AppRoutes from 'app-router/AppRoutes';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={myTheme}>
        <div className="App">
          <AppRoutes />
        </div>
        <MyGlobalStyle />
        <CssUtils />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
