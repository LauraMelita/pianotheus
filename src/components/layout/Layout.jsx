import React from 'react';

import './Layout.scss';

const Layout = (props) => {
  return (
    <div className='layout' data-theme={props.theme}>
      {props.children}
    </div>
  );
};

export default Layout;
