import React, { useState, useRef } from "react";
import { FaCog } from "react-icons/fa";
import styles from "../Profile.module.scss";
import PropTypes from "prop-types";

const ProfileSettings = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <div
      className={`${styles.settingsButton} ${isOpen ? styles.open : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FaCog />
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <button onClick={() => onClick("update")}>Actualizar datos</button>
        </div>
      )}
    </div>
  );
};

ProfileSettings.propTypes = {
    onClick: PropTypes.func.isRequired,
    };

export default React.memo(ProfileSettings);
