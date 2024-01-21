import React from 'react';

import { FormGroup, Label, TextArea } from './Form';
import Alert from '../alert/Alert';

const TextAreaInput = ({ label, name, register, errors }) => {
  return (
    <FormGroup className={name}>
      <Label>{label}</Label>
      <TextArea name={name} {...register(name)} />
      <Alert severity='error'>{errors[name] && errors[name].message}</Alert>
    </FormGroup>
  );
};

export default TextAreaInput;
