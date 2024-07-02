import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { getCurrentUser, signOutUser } from '../services/firebase/api';

const AuthContext = createContext({
  user: null,
  isAuthenticating: false,
  setUser: () => {},
  setIsAuthenticating: () => {},
  logOut: () => {},
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [user, setUser] = useState(null);

  const logOut = () => {
    signOutUser();
    navigate('/');
  };

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
        logOut,
      }}
    >
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};

export const useUserContext = () => useContext(AuthContext);
