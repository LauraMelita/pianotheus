import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { useFocusTrap, useMergedRef } from '@mantine/hooks';

import './Form.scss';

const Form = forwardRef(({ className, onSubmit, children }, ref) => {
  const focusTrapRef = useFocusTrap();
  const mergedRef = useMergedRef(ref, focusTrapRef);

  return (
    <form className={classNames(className)} ref={mergedRef} onSubmit={onSubmit}>
      {children}
    </form>
  );
});

const FormGroup = forwardRef(({ className, children }, ref) => {
  return (
    <div className={classNames(className, 'form-group')} ref={ref}>
      {children}
    </div>
  );
});

const Label = forwardRef(({ children, ...props }, ref) => {
  return (
    <label ref={ref} {...props}>
      {children}
    </label>
  );
});

const Input = forwardRef(({ ...props }, ref) => {
  return <input ref={ref} {...props} />;
});

const TextArea = forwardRef(({ ...props }, ref) => {
  return <textarea ref={ref} {...props} />;
});

export { Form, FormGroup, Label, Input, TextArea };
