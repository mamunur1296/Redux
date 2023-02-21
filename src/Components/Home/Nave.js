import React from "react";
import { Link } from "react-router-dom";

const Nave = () => {
  return (
    <div>
      <Link to="/about">
        <p>About</p>
      </Link>
      <Link to="/login">
        <p>Login</p>
      </Link>
      <Link to="/regester">
        <p>Regester</p>
      </Link>
    </div>
  );
};

export default Nave;
