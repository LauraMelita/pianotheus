import { createContext, useState, useEffect, useContext } from 'react';

import { getCurrentUser, signOutUser } from '../services/firebase/api';

const AuthContext = createContext({
  user: null,
  isAuthenticating: false,
  setUser: () => {},
  setIsAuthenticating: () => {},
  signOutUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authListener = getCurrentUser((currentUser) => {
      setUser(currentUser);
      setIsAuthenticating(false);
    });

    return () => {
      authListener();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signOutUser,
      }}
    >
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};

export const useUserContext = () => useContext(AuthContext);
