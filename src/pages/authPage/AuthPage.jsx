import React from 'react';
import { Navigate } from 'react-router-dom';

import { useUserContext } from '../../context/AuthContext';
import { useResponsive } from '../../hooks/useResponsive';
import { useStyles } from '../../hooks/useStyles';

import Login from './login/Login';
import Register from './register/Register';

import AuthImage from '../../assets/images/authentication/auth__bg.jpg';
import './AuthPage.scss';

const BackgroundImage = () => {
  const { authBackground } = useStyles();

  return (
    <div
      className='auth__img'
      style={{
        backgroundImage: authBackground(AuthImage),
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    />
  );
};

const AuthPage = ({ role }) => {
  const { user: authenticatedUser } = useUserContext();
  const { isDesktop } = useResponsive();

  const marginInline = `calc((100vw - (100vw * ${isDesktop ? 0.8 : 0.9})) / 2)`;

  const components = {
    login: Login,
    register: Register,
  };

  const AuthComponent = components[role];

  if (authenticatedUser) return <Navigate to='/' />;

  return (
    <main className='auth'>
      <section className='full-width'>
        <div className={`auth__${role}`} style={{ marginInline }}>
          <AuthComponent />
        </div>
        <BackgroundImage />
      </section>
    </main>
  );
};

export default AuthPage;
