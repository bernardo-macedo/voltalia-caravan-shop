import React, { useContext } from "react";
import { productsList } from "../productsList";
import { ShopContext } from "../context/ShopContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);

  return (
    <div className="row">
      {productsList.map((product) => (
        <div key={product.id} className="col-md-4 col-6 p-3">
          <div className="card text-center">
            <img src={product.productImg} className="card-img-top p-2" />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">
                {product.productName}
              </h5>
              <p className="card-text">£ {product.price}</p>
              <label htmlFor="quantity">Quantity</label>
              <div className="input-group mb-3">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() =>
                    cartItems[product.id] > 0
                      ? removeFromCart(product.id)
                      : null
                  }
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>

                <input
                  name="quantity"
                  type="number"
                  className="form-control"
                  min="0"
                  value={cartItems[product.id]}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => addToCart(product.id)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
