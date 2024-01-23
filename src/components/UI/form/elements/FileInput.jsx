import React from 'react';

import { FormGroup, Label, Input } from '../Form';
import Svg from '../../svg/Svg';
import Alert from '../../alert/Alert';

const FileInput = ({ label, register, watch, errors }) => {
  const FileName = () => {
    if (!watch('file') || watch('file').length === 0) return null;

    return <span className='file__name'>{watch('file')[0]?.name}</span>;
  };

  return (
    <FormGroup className='file'>
      <Label htmlFor='file'>
        <div className='file__trigger'>
          <Svg icon='add-image' />
          <span>{label}</span>
        </div>
        <FileName />
      </Label>
      <Input type='file' id='file' name='file' {...register('file')} />
      <Alert severity='error'>{errors.file && errors.file.message}</Alert>
    </FormGroup>
  );
};

export default FileInput;
