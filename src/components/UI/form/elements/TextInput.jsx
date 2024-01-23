import React from 'react';

import { FormGroup, Label, Input } from '../Form';
import Alert from '../../alert/Alert';

const TextInput = ({ label, type, name, register, errors }) => {
  return (
    <FormGroup className={name}>
      <Label>{label}</Label>
      <Input name={name} type={type} {...register(name)} />
      <Alert severity='error'>{errors[name] && errors[name].message}</Alert>
    </FormGroup>
  );
};

export default TextInput;
