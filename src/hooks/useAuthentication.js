import { useState } from 'react';

export const useAuthentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleIsLoggedIn = () => setIsLoggedIn((prev) => !prev);

  return {
    isLoggedIn,
    toggleIsLoggedIn,
  };
};
