import { useAuthContext } from '../context/AuthContext';

export const useAuthentication = () => {
  const { isLoggedIn, setIsLoggedIn, toggleIsLoggedIn } = useAuthContext();

  return {
    isLoggedIn,
    setIsLoggedIn,
    toggleIsLoggedIn,
  };
};
