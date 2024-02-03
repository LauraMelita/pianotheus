import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../common/navbar/Navbar';
import Footer from '../../common/footer/Footer';

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
