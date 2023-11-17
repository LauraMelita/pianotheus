import React, { useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ThemeContext } from './context/ThemeContext';

import Layout from './components/layout/Layout';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import MovieRoutes from './routes/MovieRoutes';
import TVShowRoutes from './routes/TVShowRoutes';
import VideoGameRoutes from './routes/VideoGameRoutes';
import ClassicalRoutes from './routes/ClassicalRoutes';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <Layout theme={theme}>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='movies/*' element={<MovieRoutes />} />
        <Route path='tv-shows/*' element={<TVShowRoutes />} />
        <Route path='video-games/*' element={<VideoGameRoutes />} />
        <Route path='classical/*' element={<ClassicalRoutes />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <ToastContainer
        className='toaster'
        position='bottom-right'
        theme={theme}
      />
      <Footer />
    </Layout>
  );
};

export default App;
