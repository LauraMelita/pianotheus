import React from 'react';
import classNames from 'classnames';

import { FormGroup, Label, Input } from '../Form';
import Alert from '../../alert/Alert';

const TextInput = ({ label, type, name, register, errors, ...props }) => {
  return (
    <FormGroup className={classNames(name)}>
      <Label>{label}</Label>
      <Input name={name} type={type} {...register(name)} {...props} />
      <Alert severity='error'>{errors[name] && errors[name].message}</Alert>
    </FormGroup>
  );
};

export default TextInput;
