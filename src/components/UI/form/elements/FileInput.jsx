import React from 'react';

import { FormGroup, Label, Input } from '../Form';
import Svg from '../../svg/Svg';
import Alert from '../../alert/Alert';

const FileInput = ({ label, register, watch, errors }) => {
  const selectedFile = watch('file')?.[0];

  const FileName = () => {
    return (
      selectedFile && <span className='file__name'>{selectedFile.name}</span>
    );
  };

  const FilePreview = () => {
    return (
      selectedFile && (
        <img
          src={URL.createObjectURL(selectedFile)}
          alt='selected avatar'
          height={100}
          width={100}
        />
      )
    );
  };

  return (
    <FormGroup className='file'>
      <Label htmlFor='file'>
        <div className='file__trigger'>
          <Svg icon='add-image' />
          <span>{label}</span>
        </div>
        <FileName />
        <FilePreview />
      </Label>
      <Input type='file' id='file' name='file' {...register('file')} />
      <Alert severity='error'>{errors.file && errors.file.message}</Alert>
    </FormGroup>
  );
};

export default FileInput;
