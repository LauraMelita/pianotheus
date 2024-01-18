import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDocumentTitle } from '@mantine/hooks';
import { toast } from 'react-toastify';

import { useShowPassword } from '../../hooks/useShowPassword';
import { useSignInUser } from '../../services/reactQuery/queries';

import { Form, FormGroup, Label, Input } from '../../components/UI/form/Form';
import Button from '../../components/UI/button/Button';
import Svg from '../../components/UI/svg/Svg';
import Contact from '../../features/contact/Contact';
import Spinner from '../../components/UI/spinner/Spinner';
import BackgroundImage from '../../components/UI/image/BackgroundImage';

const SignInPage = () => {
  const navigate = useNavigate();
  useDocumentTitle('Pianotheus | Sign In');
  const { toggleShowPassword, icon, inputType } = useShowPassword();
  const {
    mutateAsync: signInUser,
    isLoading: isSigningInUser,
    isError,
    error,
  } = useSignInUser();

  const handleLogin = async (e) => {
    e.preventDefault();

    const [email, password] = e.target;
    const user = { email: email.value, password: password.value };

    try {
      await signInUser(user);
      navigate('/');
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  return (
    <main className='sign-in'>
      <div className='container'>
        <div>
          <h2 className='gradient-text'>Log in to Pianotheus</h2>
          <p className='redirect'>
            Don't have an account? <Link to='/register'>Sign up</Link>
          </p>
          <span>{isError && error.message}</span>
          <Form onSubmit={handleLogin}>
            <FormGroup className='email'>
              <Label>Email</Label>
              <Input type='email' name='email' />
            </FormGroup>
            <FormGroup className='password'>
              <Label>Password</Label>
              <div>
                <Input type={inputType} name='password' />
                <Button
                  variant='icon'
                  type='button'
                  onClick={toggleShowPassword}
                >
                  <Svg icon={icon} />
                </Button>
              </div>
            </FormGroup>
            <Button variant='default' type='submit'>
              {isSigningInUser ? <Spinner type='dotted' /> : 'Log in'}
            </Button>
          </Form>
          <Contact btnText='Need help signing in?' />
        </div>
      </div>
      <BackgroundImage
        url='https://atthemoviesshop.com/cdn/shop/files/unbreakable-vinyl-soundtrack-atm_460x@2x.webp'
        backgroundSize='cover'
        backgroundPosition='100% 100%'
      />
    </main>
  );
};

export default SignInPage;
