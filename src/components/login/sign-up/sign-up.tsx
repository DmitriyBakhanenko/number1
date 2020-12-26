import React, { useState } from 'react';
import './sign-up.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const SignIn = ({ signUpStart }) => {
  const [userCredentials, setuserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart(email, password, displayName);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setuserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>У меня нет аккаунта</h2>
      <span>Укажите данные для регистрации</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Имя'
          required
        ></FormInput>
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Почта'
          required
        ></FormInput>
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Пароль'
          required
        ></FormInput>
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Подтвердите пароль'
          required
        ></FormInput>
        <CustomButton type='submit'>Зарегестрироваться</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName }))
});

export default connect(null, mapDispatchToProps)(SignIn);
