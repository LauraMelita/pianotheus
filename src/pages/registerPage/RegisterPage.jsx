import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDocumentTitle } from '@mantine/hooks';
import { toast } from 'react-toastify';

import { useShowPassword } from '../../hooks/useShowPassword';
import { useCreateUserAccount } from '../../services/reactQuery/queries';

import { Form, FormGroup, Label, Input } from '../../components/UI/form/Form';
import Button from '../../components/UI/button/Button';
import Svg from '../../components/UI/svg/Svg';
import Spinner from '../../components/UI/spinner/Spinner';
import BackgroundImage from '../../components/UI/image/BackgroundImage';

const RegisterPage = () => {
  const navigate = useNavigate();
  useDocumentTitle('Pianotheus | Sign Up');
  const { toggleShowPassword, icon, inputType } = useShowPassword();
  const {
    mutateAsync: createUserAccount,
    isLoading: isCreatingAccount,
    isError,
    error,
  } = useCreateUserAccount();

  const handleRegister = async (e) => {
    e.preventDefault();

    const user = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      avatar: e.target.avatar.files[0],
    };

    try {
      await createUserAccount(user);
      navigate('/');
    } catch (error) {
      toast.error('Sign up failed. Please try again.', {
        hideProgressBar: true,
      });
    }
  };

  return (
    <main className='sign-up'>
      <div className='container'>
        <div>
          <h2 className='gradient-text'>Create an account</h2>
          <p className='redirect'>
            Already have an account? <Link to='/sign-in'>Sign in</Link>
          </p>
          <Form onSubmit={handleRegister}>
            <FormGroup className='username'>
              <Label>Username</Label>
              <Input type='text' name='username' />
            </FormGroup>
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
            <FormGroup className='file'>
              <Label htmlFor='avatar'>
                <Svg icon='add-image' />
                <span>Add an avatar</span>
              </Label>
              <Input type='file' id='avatar' name='avatar' />
            </FormGroup>
            <span>{isError && error.message}</span>
            <Button variant='default' type='submit'>
              {isCreatingAccount ? <Spinner type='dotted' /> : 'Create Account'}
            </Button>
          </Form>
        </div>
      </div>
      <BackgroundImage
        url='https://cdna.artstation.com/p/assets/images/images/021/705/528/large/andrea-boloch-horror-time-03.jpg?1572638877'
        backgroundSize='cover'
        backgroundPosition='100% 100%'
        gradient={{
          type: 'linear',
          direction: '270deg',
          transparentPosition: '65%',
          bgPosition: '87%',
        }}
      />
    </main>
  );
};

export default RegisterPage;
