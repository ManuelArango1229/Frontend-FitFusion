import React from 'react';
import styles from './Button.module.scss';

const Button = ({ type = 'button', onClick, children }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;