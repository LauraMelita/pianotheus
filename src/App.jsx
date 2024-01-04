import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer as Toast } from 'react-toastify';

import Layout from './components/layout/Layout';
import AuthLayout from './components/layout/AuthLayout';
import SignInPage from './pages/signInPage/SignInPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import AppLayout from './components/layout/AppLayout';
import HomePage from './pages/homePage/HomePage';
import CollectionRoutes from './routes/CollectionRoutes';
import NotFoundPage from './pages/errorPage/NotFoundPage';

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
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toast position='bottom-right' />
    </Layout>
  );
};

export default App;
