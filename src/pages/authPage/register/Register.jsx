import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCreateUserAccount } from '../../../services/reactQuery/queries';
import { signUpValidation } from '../../../services/zod/validation';

import { Form } from '../../../components/UI/form/Form';
import TextInput from '../../../components/UI/form/elements/TextInput';
import PasswordInput from '../../../components/UI/form/elements/PasswordInput';
import FileInput from '../../../components/UI/form/elements/FileInput';
import SubmitButton from '../../../components/UI/form/elements/SubmitButton';
import Alert from '../../../components/UI/alert/Alert';

const Register = ({ withAuthSuggestion }) => {
  const navigate = useNavigate();
  const { mutateAsync: createUserAccount } = useCreateUserAccount();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: zodResolver(signUpValidation),
  });

  const onRegisterUser = async ({ username, email, password, file }) => {
    const avatar = file[0];
    const newUser = { username, email, password, avatar };

    try {
      await createUserAccount(newUser);
      reset();
      navigate('/');
    } catch (error) {
      if (error.message.includes('auth/email-already-in-use')) {
        setError('email', {
          message: 'Email already in use',
        });
      } else {
        setError('root', {
          message: error.message,
        });
      }
    }
  };

  return (
    <>
      <h2 className='heading'>Create an account</h2>
      {withAuthSuggestion && (
        <p className='redirect'>
          Already have an account? <Link to='/sign-in'>Sign in</Link>
        </p>
      )}
      <Form onSubmit={handleSubmit(onRegisterUser)}>
        <TextInput
          label='Username'
          type='text'
          name='username'
          register={register}
          errors={errors}
        />
        <TextInput
          label='Email'
          type='text'
          name='email'
          register={register}
          errors={errors}
        />
        <PasswordInput register={register} errors={errors} />
        <FileInput
          label='Avatar'
          register={register}
          watch={watch}
          errors={errors}
        />
        <SubmitButton btnText='Create Account' isSubmitting={isSubmitting} />
      </Form>
      <Alert className='form-error' severity='error'>
        {errors.root && errors.root.message}
      </Alert>
    </>
  );
};

export default Register;
