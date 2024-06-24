import React from 'react';

import 'react-toastify/dist/ReactToastify.css';
import './Layout.scss';

const Layout = ({ children }) => {
  return <div className='layout'>{children}</div>;
};

export default Layout;
