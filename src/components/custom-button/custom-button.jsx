import React from 'react';
import './custom-button.scss';

interface btn {
  children: any;
  isGoogleSignIn: any;
  inverted: any;
  overlay: any;
}

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  overlay,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } ${overlay ? 'overlay' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
