import React from 'react';

import { AuthProvider } from '../context/AuthContext';
import { ThemeProvider } from '../context/ThemeContext';
import { MobileMenuProvider } from '../context/MobileMenuContext';
import { PlayerProvider } from '../context/PlayerContext';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <MobileMenuProvider>
          <PlayerProvider>{children}</PlayerProvider>
        </MobileMenuProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default Providers;
