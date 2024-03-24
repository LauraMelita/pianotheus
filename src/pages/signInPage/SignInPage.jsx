import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useSignInUser } from '../../services/reactQuery/queries';
import { signInValidation } from '../../services/zod/validation';

import { Form } from '../../components/UI/form/Form';
import TextInput from '../../components/UI/form/elements/TextInput';
import PasswordInput from '../../components/UI/form/elements/PasswordInput';
import Alert from '../../components/UI/alert/Alert';
import SubmitButton from '../../components/UI/form/elements/SubmitButton';
import ContactModal from '../../features/contact/ContactModal';
import { BackgroundImage } from '../../components/UI/image/BackgroundImage';

const SignInPage = () => {
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

  return (
    <main className='sign-in'>
      <div className='container'>
        <div>
          <h2 className='header gradient-text'>Log in to Pianotheus</h2>
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
        url='https://atthemoviesshop.com/cdn/shop/files/unbreakable-vinyl-soundtrack-atm_460x@2x.webp'
        backgroundPosition='100% 100%'
      />
    </main>
  );
};

export default SignInPage;
