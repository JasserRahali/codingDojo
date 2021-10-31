import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Commerce manager
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
