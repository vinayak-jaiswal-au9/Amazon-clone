import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  //   console.log(id, title, image, price, rating);

  const removeFromBasket = () => {
    // logic for removing product
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProducts">
      <img src={image} alt="" />

      <div className="checkoutProducts__info">
        <p className="checkoutProducts__title">{title}</p>

        <p className="checkoutProducts__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="CheckoutProducts__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>

        <button className="CheckoutProducts__button" onClick={removeFromBasket}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
