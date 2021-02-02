import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "../reducer";
import "./SubTotal.css";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <h2>Subtotal</h2>
      <hr />
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              <strong>total</strong> ({basket.length} items ) ={" "}
              <strong>{value}</strong>
            </p>
            <p className="subtotal__para">(inclusive of all taxes)</p>
            <small className="subtotal__gift">
              <input type="checkbox" className="subtotal__input" />
              contain gifts from amazon
            </small>
            <br />
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$ "}
      />
      <button>Proceed to Buy</button>
    </div>
  );
}

export default SubTotal;
