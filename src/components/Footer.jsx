import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-3 bg-secondary">
      <div className="container">
        <div className="row">
          <div className="col-6">
            COPYRIGHTS © VOLTALIA. ALL RIGHTS RESERVED
          </div>
          <div className="col-6 text-end">
            <Link className="link-light" to={"/termsandconditions"}>
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
