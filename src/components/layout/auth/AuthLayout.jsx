import React from 'react';
import { Outlet } from 'react-router-dom';

import AuthNavbar from '../../common/navbar/AuthNavbar';
import Footer from '../../common/footer/Footer';

const AuthLayout = () => {
  return (
    <>
      <AuthNavbar />
      <Outlet />
      <Footer withQuickLinks={false} />
    </>
  );
};

export default AuthLayout;
