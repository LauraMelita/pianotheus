import React from 'react';

import '../../styles/variables.scss';
import './Layout.scss';

const Layout = (props) => {
  return (
    <div className='layout' data-theme={props.theme}>
      {props.children}
    </div>
  );
};

export default Layout;
