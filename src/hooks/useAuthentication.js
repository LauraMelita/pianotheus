import { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

export const useAuthentication = () => {
  const { isLoggedIn, setIsLoggedIn, toggleIsLoggedIn } =
    useContext(AuthContext);

  return {
    isLoggedIn,
    setIsLoggedIn,
    toggleIsLoggedIn,
  };
};
