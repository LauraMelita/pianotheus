import { createContext, useState } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  toggleIsLoggedIn: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleIsLoggedIn = () => setIsLoggedIn((prev) => !prev);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, toggleIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
