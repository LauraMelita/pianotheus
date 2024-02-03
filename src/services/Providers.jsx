import React from 'react';

import { AuthProvider } from '../context/AuthContext';
import { ThemeProvider } from '../context/ThemeContext';
import { MobileMenuProvider } from '../context/MobileMenuContext';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <MobileMenuProvider>{children}</MobileMenuProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default Providers;
