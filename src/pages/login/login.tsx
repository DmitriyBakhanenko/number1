import React from 'react';
import './login.scss';
import SignIn from '../../components/login/sign-in/sign-in';
import SignUp from '../../components/login/sign-up/sign-up';
//import { connect } from 'react-redux';
//import { userAuthificationLoaded } from '../../redux/user/user.selectors';
//import { createStructuredSelector } from 'reselect';
import {
  SpinnerOverlay,
  SpinnerContainer,
} from '../../components/with-spinner/with-spinner.styles';
//import { useState } from 'react';
//import { useEffect } from 'react';

// TODO = isLoading prop
// substitute currentStatus
const currentStatus = true;

const LoginPage = () => {
  //const [currentStatus, setCurrentStatus] = useState(isLoading);

  //useEffect(() => {
  //setCurrentStatus(isLoading);
  //}, [isLoading]);

  return (
    <div className='login'>
      {currentStatus ? (
        <>
          <SignIn />
          <SignUp />
        </>
      ) : (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      )}
    </div>
  );
};

//const mapStateToProps = createStructuredSelector({
//isLoading: state => !userAuthificationLoaded(state),
//});

//export default connect(mapStateToProps)(SignInAndSignUpPage);
export default LoginPage;
