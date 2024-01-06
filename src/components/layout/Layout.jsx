import React from 'react';
import { useLocation } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './Layout.scss';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  const layoutType =
    pathname.includes('/sign-in') || pathname.includes('/register')
      ? 'auth'
      : 'main';

  return <div className={`layout ${layoutType}`}>{children}</div>;
};

export default Layout;
