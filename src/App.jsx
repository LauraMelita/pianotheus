import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AuthLayout from './components/layout/auth/AuthLayout';
import AuthPage from './pages/authPage/AuthPage';
import AppLayout from './components/layout/app/AppLayout';
import HomePage from './pages/homePage/HomePage';
import CollectionRoutes from './routes/CollectionRoutes';
import ErrorPage from './pages/errorPage/ErrorPage';
import Toaster from './components/UI/toaster/Toaster';

import { useDocumentTitle } from './hooks/useDocumentTitle';
import { useScrollRestoration } from './hooks/useScrollRestoration';

const App = () => {
  useDocumentTitle();
  useScrollRestoration();

  return (
    <Layout>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='sign-in' element={<AuthPage role='login' />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/:collection/*' element={<CollectionRoutes />} />
          <Route path='*' element={<ErrorPage code='404' />} />
        </Route>
      </Routes>
      <Toaster />
    </Layout>
  );
};

export default App;
