import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsConditions = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section>
        <div className="container mt-4">
          <div className="row">
            <div className="col mb-4">
              <Link
                to={".."}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(-1);
                }}
              >
                Back
              </Link>
            </div>
          </div>
        </div>
        <div className="container vh-100">
          <div className="row">
            <div className="col">
              <h4>Terms and Conditions</h4>
              <p>LEGAL NOTICE</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                nec turpis nec tellus vestibulum placerat ut in est. Suspendisse
                potenti. Ut vitae metus a leo pharetra ornare in et nulla.
                Nullam lacus justo, sagittis in placerat imperdiet, finibus eu
                orci. In egestas venenatis enim, a sagittis felis tempor a. In
                suscipit nunc condimentum varius dictum. Donec varius eu odio eu
                rhoncus. Mauris molestie convallis felis maximus pharetra.
                Nullam pellentesque feugiat leo aliquam ornare. Donec rutrum
                lacinia neque, nec efficitur leo bibendum sit amet. Cras vel
                interdum purus, id luctus augue. Maecenas non euismod justo.
                Morbi scelerisque ac neque in tristique. Phasellus quis nisl eu
                metus pharetra suscipit. Curabitur cursus est luctus, mattis
                turpis et, sollicitudin justo. Sed vel sodales elit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsConditions;
