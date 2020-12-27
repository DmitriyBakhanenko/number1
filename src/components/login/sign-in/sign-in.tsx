import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../form-input/form-input';
import CustomButton from '../../custom-button/custom-button';
import {
  emailSignInStart,
  googleSignInStart,
} from '../../../redux/user/user.actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SignIn = () => {
  const dispatch = useDispatch();

  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const credentials = { email, password };
    dispatch(emailSignInStart(credentials));
  };

  const handleChange = (event: any) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2>Уже есть аккаунт?</h2>
      <span>Войдите с помошью логина и пароля</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          onChange={handleChange}
          value={email}
          label='почта'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          label='пароль'
          onChange={handleChange}
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'> Логин </CustomButton>
          <CustomButton
            type={'button'}
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
