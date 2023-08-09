import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import MovieRoutes from './routes/MovieRoutes';
import TVShowRoutes from './routes/TVShowRoutes';
import VideoGameRoutes from './routes/VideoGameRoutes';
import ClassicalRoutes from './routes/ClassicalRoutes';
import PageNotFound from './pages/PageNotFound';

import './App.scss';

const App = () => {
  const location = useLocation();

  return (
    <div className='page-layout'>
      <Navbar />
      <div className='page-content'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='movies/*' element={<MovieRoutes />} />
          <Route path='tv-shows/*' element={<TVShowRoutes />} />
          <Route path='video-games/*' element={<VideoGameRoutes />} />
          <Route path='classical/*' element={<ClassicalRoutes />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <ToastContainer position='bottom-right' theme='dark' />
      </div>
      <Footer />
    </div>
  );
};

export default App;
