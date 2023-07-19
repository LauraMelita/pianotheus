import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer.js';
import MovieRoutes from './Routes/MovieRoutes';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

import './App.scss';

const App = () => {
  const location = useLocation();

  return (
    <div className='page-layout'>
      <NavigationBar />
      <div className='page-content'>
        <AnimatePresence initial={false} mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<HomePage />} />
            <Route path='movies/*' element={<MovieRoutes />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};

export default App;
