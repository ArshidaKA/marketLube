import React from 'react';
import classes from './Button.module.scss';

const Button = ({ text, variant = 'primary', onClick, type = 'button' }) => {
  return (
    <button
      className={`${classes.btn} ${classes[variant]}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
