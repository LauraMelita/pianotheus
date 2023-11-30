import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer as Toast } from 'react-toastify';

import Layout from './components/layout/Layout';
import Navbar from './components/common/navbar/Navbar';
import Footer from './components/common/footer/Footer';
import Home from './pages/home/Home';
import MovieRoutes from './routes/MovieRoutes';
import TVShowRoutes from './routes/TVShowRoutes';
import VideoGameRoutes from './routes/VideoGameRoutes';
import ClassicalRoutes from './routes/ClassicalRoutes';
import PageNotFound from './pages/error/PageNotFound';

const App = () => {
  const location = useLocation();

  return (
    <Layout>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='movies/*' element={<MovieRoutes />} />
        <Route path='tv-shows/*' element={<TVShowRoutes />} />
        <Route path='video-games/*' element={<VideoGameRoutes />} />
        <Route path='classical/*' element={<ClassicalRoutes />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Toast position='bottom-right' />
      <Footer />
    </Layout>
  );
};

export default App;
