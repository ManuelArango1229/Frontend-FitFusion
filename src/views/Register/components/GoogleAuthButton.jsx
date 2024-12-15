import React from "react";
import PropTypes from "prop-types";

const GoogleAuthButton = ({ onClick }) => {
    return (
      <button className="google-button" onClick={onClick}>
        Regístrate con Google
      </button>
    );
};
  
GoogleAuthButton.propTypes = {
    onClick: PropTypes.func.isRequired
};
export default React.memo(GoogleAuthButton);
  