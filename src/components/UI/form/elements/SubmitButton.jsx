import React from 'react';

import Button from '../../button/Button';
import Spinner from '../../spinner/Spinner';

const SubmitButton = ({ btnText, isSubmitting }) => {
  return (
    <Button disabled={isSubmitting} variant='default' type='submit'>
      {isSubmitting ? (
        <>
          {btnText}
          <Spinner type='dotted' />
        </>
      ) : (
        btnText
      )}
    </Button>
  );
};

export default SubmitButton;
