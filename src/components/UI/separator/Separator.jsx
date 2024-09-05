import React from 'react';
import * as RadixSeparator from '@radix-ui/react-separator';
import classNames from 'classnames';

import './Separator.scss';

const Separator = ({ type, orientation, decorative = true }) => {
  return (
    <RadixSeparator.Root
      className={classNames('separator', type)}
      orientation={orientation}
      decorative={decorative}
    />
  );
};

export default Separator;
