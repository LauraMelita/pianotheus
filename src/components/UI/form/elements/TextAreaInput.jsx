import React from 'react';

import { FormGroup, Label, TextArea } from '../Form';
import Alert from '../../alert/Alert';

const TextAreaInput = ({ label, name, rows, register, errors }) => {
  return (
    <FormGroup className='textarea'>
      <Label>{label}</Label>
      <TextArea name={name} rows={rows} {...register(name)} />
      <Alert severity='error'>{errors[name] && errors[name].message}</Alert>
    </FormGroup>
  );
};

export default TextAreaInput;
