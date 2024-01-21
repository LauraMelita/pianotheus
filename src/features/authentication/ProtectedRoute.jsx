import React from 'react';
import { Navigate } from 'react-router-dom';

import { useUserContext } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user: authenticatedUser } = useUserContext();

  if (!authenticatedUser) return <Navigate to='/sign-in' />;

  return children;
};

export default ProtectedRoute;
