import React, { useContext, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { productsList } from "../productsList";
import { ShopContext } from "../context/ShopContextProvider";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";

const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const userID = import.meta.env.VITE_USER_ID;

const Checkout = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const [termsChecked, setTermsChecked] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const totalAmount = getTotalCartAmount();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if any required fields are empty
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "address",
      "city",
      "country",
      "zipCode",
    ];
    const isEmpty = requiredFields.some((field) => !form.current[field].value);

    // Display error message if any required field is empty
    if (isEmpty) {
      // Error message for empty fields
      setErrorMsg("Please fill in all required fields.");
      return;
    } else {
      // Clear the error message if no fields are empty
      setErrorMsg("");
    }

    if (totalAmount > 0 && termsChecked) {
      emailjs.sendForm(serviceID, templateID, form.current, userID).then(
        (result) => {
          setSuccessMsg("Form submitted successfully!");
          setErrorMsg(""); // Clear any previous error messages
          form.current.reset(); // Reset the form fields
          setTermsChecked(false); // Reset the checkbox
        },
        (error) => {
          setErrorMsg("Failed to submit the form. Please try again later.");
        }
      );
    }
  };

  return (
    <>
      <Navbar />
      <section className="min-vh-100">
        <div className="container mt-4">
          <div className="mb-4">
            <Link to="/voltalia-caravan-shop/">Back to shop</Link>
          </div>
          <div className="row">
            <div className="col-md-4 col-12">
              <h4 className="mb-4">Your cart items:</h4>
              <div className="cartTotal">
                <p>
                  <b>Total: £ {totalAmount}</b>
                </p>
              </div>
              <div className="cart-items">
                {productsList.map((product) => {
                  if (cartItems[product.id] !== 0) {
                    return <CartItem key={product.id} data={product} />;
                  }
                })}
              </div>
            </div>
            <div className="col-md-8 col-12 pe-md-5">
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <h4 className="mb-4">Personal details</h4>
                  <div className="col-6 form-group">
                    <label for="firstName">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      placeholder=""
                    />
                  </div>
                  <div className="col-6 form-group">
                    <label for="lastName">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-6 form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="col-6 form-group">
                    <label for="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-4 form-group">
                    <label for="address">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-3 form-group">
                    <label for="city">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-3 form-group">
                    <label for="country">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      name="country"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-2 form-group">
                    <label for="zipCode">Zip code</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zipCode"
                      name="zipCode"
                      placeholder=""
                    />
                  </div>
                  <div className="productsForm">
                    {productsList.map((product) => {
                      if (cartItems[product.id] !== 0) {
                        return (
                          <input
                            type="hidden"
                            name={product.productName}
                            value={cartItems[product.id]}
                          />
                        );
                      }
                    })}
                    <input
                      type="hidden"
                      name="totalValue"
                      value={totalAmount}
                    />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-12 form-group">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="termsConditions"
                      name="termsConditions"
                      onChange={() => setTermsChecked(!termsChecked)}
                    />
                    <label
                      className="form-check-label ms-2"
                      for="termsConditions"
                    >
                      {" "}
                      I accept the Terms and conditions
                      {/* I accept the{" "}
                      <Link to={"/termsandconditions"}>
                        <a href="" target="_blank">
                          Terms and Conditions
                        </a>
                      </Link> */}
                    </label>
                  </div>
                </div>
                {/* Error message for empty fields */}
                {errorMsg && (
                  <div className="alert alert-danger mt-3">{errorMsg}</div>
                )}
                {successMsg && (
                  <div className="alert alert-success mt-3">{successMsg}</div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary w-100 p-2 mt-4"
                  disabled={!termsChecked || totalAmount === 0}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
