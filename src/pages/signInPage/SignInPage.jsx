import React from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useUserContext } from '../../context/AuthContext';
import { useSignInUser } from '../../services/reactQuery/queries';
import { signInValidation } from '../../services/zod/validation';

import { Form } from '../../components/UI/form/Form';
import TextInput from '../../components/UI/form/elements/TextInput';
import PasswordInput from '../../components/UI/form/elements/PasswordInput';
import Alert from '../../components/UI/alert/Alert';
import SubmitButton from '../../components/UI/form/elements/SubmitButton';
import ContactModal from '../../features/contact/ContactModal';
import { BackgroundImage } from '../../components/UI/image/BackgroundImage';

import AuthBackground from '../../assets/images/authentication/auth__bg.jpg';

const SignInPage = () => {
  const { user: authenticatedUser } = useUserContext();
  const navigate = useNavigate();

  const { mutateAsync: signInUser } = useSignInUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: zodResolver(signInValidation),
  });

  const onLoginUser = async (formData) => {
    try {
      await signInUser(formData);
      reset();
      navigate('/');
    } catch (error) {
      setError('root', {
        message: error.message,
      });
    }
  };

  if (authenticatedUser) return <Navigate to='/' />;

  return (
    <main className='sign-in'>
      <div className='container'>
        <div>
          <h2 className='heading heading-grad'>Log in to Pianotheus</h2>
          <p className='redirect'>
            Don't have an account? <Link to='/register'>Sign up</Link>
          </p>
          <Form onSubmit={handleSubmit(onLoginUser)}>
            <TextInput
              label='Email'
              type='text'
              name='email'
              register={register}
              errors={errors}
            />
            <PasswordInput register={register} errors={errors} />
            <SubmitButton btnText='Log in' isSubmitting={isSubmitting} />
          </Form>
          {errors.root && (
            <Alert className='form-error' severity='error'>
              {errors.root.message}
            </Alert>
          )}
          <ContactModal btnText='Need help signing in?' />
        </div>
      </div>
      <BackgroundImage
        url={AuthBackground}
        gradient={{
          type: 'linear',
          direction: '270deg',
          transparentPosition: '65%',
          bgPosition: '100%',
        }}
      />
    </main>
  );
};

export default SignInPage;
