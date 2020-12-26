import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../form-input/form-input';
import CustomButton from '../../custom-button/custom-button';
import {
  emailSignInStart,
  googleSignInStart,
} from '../../../redux/user/user.actions';
import { connect } from 'react-redux';
import { useState } from 'react';

const SignIn = ({ emailSignInStart: any, googleSignInStart: any }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
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
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchtoProps = (dispatch: any) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: string, password: string) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchtoProps)(SignIn);
