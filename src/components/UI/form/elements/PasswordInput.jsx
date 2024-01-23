import React from 'react';

import { useShowPassword } from '../../../../hooks/useShowPassword';

import { FormGroup, Label, Input } from '../Form';
import Button from '../../button/Button';
import Svg from '../../svg/Svg';
import Alert from '../../alert/Alert';

const PasswordInput = ({ register, errors }) => {
  const { inputType, toggleShowPassword, icon } = useShowPassword();
  return (
    <FormGroup className='password'>
      <Label>Password</Label>
      <div>
        <Input {...register('password')} type={inputType} name='password' />
        <Button variant='icon' type='button' onClick={toggleShowPassword}>
          <Svg icon={icon} />
        </Button>
      </div>
      <Alert severity='error'>
        {errors.password && errors.password.message}
      </Alert>
    </FormGroup>
  );
};

export default PasswordInput;
