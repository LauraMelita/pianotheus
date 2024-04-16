import React from 'react';
import { useClipboard } from '@mantine/hooks';

import Button from '../../components/UI/button/Button';

const Clipboard = ({ delay = 500, value }) => {
  const clipboard = useClipboard({ timeout: delay });

  return (
    <Button className='clipboard' onClick={() => clipboard.copy(value)}>
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  );
};

export default Clipboard;
