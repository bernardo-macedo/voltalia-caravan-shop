import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Shop = () => {
  const ref = useRef(null);

  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row align-items-center hero-image text-center vh-100">
          <div className="hero-text text-white">
            <h1 className="display-4 mt-5">
              <b>Thank you</b> for visiting us!
            </h1>
          </div>
          <a className="scroll-down">
            <FontAwesomeIcon onClick={handleScroll} icon={faArrowDown} bounce />
          </a>
        </div>
      </div>
      <section className="mb-5">
        <div ref={ref} className="container products-area">
          <div className="row mt-5 mb-5">
            <div className="col-12">
              <h3 className="text-center">
                Select the product(s) and quantity
              </h3>
            </div>
          </div>
        </div>
        <div className="container">
          <Products />
          <div className="row">
            <div className="col">
              <Link to="/checkout">
                <button className="btn btn-primary w-100 my-3 p-2">
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Shop;
