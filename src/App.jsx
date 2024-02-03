import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AuthLayout from './components/layout/auth/AuthLayout';
import SignInPage from './pages/signInPage/SignInPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import AppLayout from './components/layout/app/AppLayout';
import HomePage from './pages/homePage/HomePage';
import CollectionRoutes from './routes/CollectionRoutes';
import ErrorPage from './pages/errorPage/ErrorPage';
import Toaster from './components/UI/toaster/Toaster';

import { useScrollToTop } from './hooks/useScrollToTop';

const App = () => {
  const { pathname } = useLocation();
  const { useRestoreScrollToTop } = useScrollToTop();

  useRestoreScrollToTop(pathname);

  return (
    <Layout>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='sign-in' element={<SignInPage />} />
          <Route path='register' element={<RegisterPage />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path='/' element={<HomePage />} />
          {CollectionRoutes()}
          <Route path='*' element={<ErrorPage code='404' />} />
        </Route>
      </Routes>
      <Toaster />
    </Layout>
  );
};

export default App;
