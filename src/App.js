import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import ComposerPage from './pages/ComposerPage';
import NotFoundPage from './pages/NotFoundPage';

import './App.scss';

const App = () => {
  return (
    <div className='page-layout'>
      <NavigationBar />
      <div className='page-content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='movies/composers'>
            <Route index={true} element={<MoviesPage />} />
            <Route
              index={false}
              path=':composerPath'
              element={<ComposerPage />}
            />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
