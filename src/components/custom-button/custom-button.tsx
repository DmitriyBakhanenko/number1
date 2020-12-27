import React from 'react';
import './custom-button.scss';

const CustomButton = (props: any) => (
  <button
    className={`${props?.inverted ? 'inverted' : ''} ${
      props?.isGoogleSignIn ? 'google-sign-in' : ''
    } ${props?.overlay ? 'overlay' : ''} custom-button`}
  >
    {props?.children}
  </button>
);

export default CustomButton;
