import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <h1>OZ 무비</h1>
      <div className="links">
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Sign up</Link>
      </div>
    </header>
  );
};

export default Navbar;
