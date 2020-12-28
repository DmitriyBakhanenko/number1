import React from 'react';
import './custom-button.scss';

interface Props {
  inverted?: boolean;
  isGoogleSignIn?: boolean;
  overlay?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: any;
  className?: string;
}

const CustomButton: React.FC<Props> = ({
  onClick,
  type,
  children,
  className,
  ...props
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`${className} ${props?.inverted ? 'inverted' : ''} ${
      props?.isGoogleSignIn ? 'google-sign-in' : ''
    } ${props?.overlay ? 'overlay' : ''} custom-button`}
  >
    {children}
  </button>
);

export default CustomButton;
