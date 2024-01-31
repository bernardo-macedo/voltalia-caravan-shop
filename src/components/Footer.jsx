import React from "react";

const Footer = () => {
  return (
    <footer className="py-3 bg-secondary">
      <div className="container">
        <div className="row">
          <div className="col-6">
            COPYRIGHTS © VOLTALIA. ALL RIGHTS RESERVED
          </div>
          <div className="col-6 text-end">
            <a
              href="https://www.voltalia.com/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
