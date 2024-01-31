import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {
  const { id, productImg, productName, price } = props.data;
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-4 d-flex">
          <img
            className="img-fluid align-self-center"
            src={productImg}
            alt=""
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{productName}</h5>
            <div className="card-text">
              <p>{price}</p>
            </div>
            <div className="input-group mb-3">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => (cartItems[id] > 0 ? removeFromCart(id) : null)}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <input
                type="number"
                className="form-control"
                min="0"
                value={cartItems[id]}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => addToCart(id)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
