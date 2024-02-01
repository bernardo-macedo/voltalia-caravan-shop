import React from "react";
import { Link } from "react-router-dom";
import voltaliaLogo from "../assets/imgs/2020_Logo_Voltalia.png";
import caravanLogo from "../assets/imgs/caravan_logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg shadow">
        <div className="container">
          <Link to={"/"}>
            <a className="navbar-brand" href="">
              <img src={voltaliaLogo} alt="" width="160" />
            </a>
          </Link>
          <a className="navbar-brand" href="">
            <img src={caravanLogo} alt="" width="200" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
