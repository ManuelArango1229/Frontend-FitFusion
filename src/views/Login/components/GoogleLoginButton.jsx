import React from 'react';
import GoogleButton from "../../../components/GoogleButton/GoogleButton";
import styles from "../styles/Login.module.scss";
import PropTypes from "prop-types";


const GoogleLoginButton = ({ onClick }) => (
  <div className={styles.googleButtonWrapper}>
    <p className={styles.orText}>O inicia sesión con</p>
    <GoogleButton onClick={onClick} />
  </div>
);

GoogleLoginButton.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

export default React.memo(GoogleLoginButton);
