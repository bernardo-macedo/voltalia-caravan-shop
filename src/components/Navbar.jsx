import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg shadow">
        <div className="container">
          <Link to={"/"}>
            <a className="navbar-brand" href="">
              <img src="./assets/2020_Logo_Voltalia.png" alt="" width="160" />
            </a>
          </Link>
          <a className="navbar-brand" href="">
            <img src="./assets/caravan_logo.png" alt="" width="200" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
