import styles from './GoogleButton.module.scss';

const GoogleButton = ({ onClick }) => {
  return (
    <button className={styles.googleButton} onClick={onClick}>
      {/* Puedes agregar un ícono de Google aquí o un texto */}
    </button>
  );
};

export default GoogleButton;
