import React from 'react';
import { Outlet } from 'react-router-dom';

import { SidebarProvider } from '../../../context/SidebarContext';

import Navbar from '../../common/navbar/Navbar';
import Footer from '../../common/footer/Footer';

const AppLayout = () => {
  return (
    <>
      <SidebarProvider>
        <Navbar />
      </SidebarProvider>
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
