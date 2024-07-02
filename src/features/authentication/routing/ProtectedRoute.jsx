import React from 'react';
import { useUserContext } from '../../../context/AuthContext';
import AuthPage from '../../../pages/authPage/AuthPage';

const ProtectedRoute = ({ children }) => {
  const { user: authenticatedUser } = useUserContext();

  if (!authenticatedUser) return <AuthPage role='login' />;

  return children;
};

export default ProtectedRoute;
