import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Clipboard from '../../../features/clipboard/Clipboard';

import './Codeblock.scss';

const Codeblock = ({ children }) => {
  const customStyle = {
    lineHeight: '1.5',
    fontSize: '1rem',
    borderRadius: '5px',
    backgroundColor: 'white',
    padding: '20px',
    overflow: 'auto',
  };

  return (
    <div className='code-block'>
      <Clipboard value={children} />
      <SyntaxHighlighter
        showLineNumbers
        customStyle={customStyle}
        language='javascript'
        style={solarizedlight}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Codeblock;
