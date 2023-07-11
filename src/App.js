import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer.js';
import MovieRoutes from './Routes/MovieRoutes';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

import './App.scss';

const App = () => {
  return (
    <div className='page-layout'>
      <NavigationBar />
      <div className='page-content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='movies/*' element={<MovieRoutes />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
