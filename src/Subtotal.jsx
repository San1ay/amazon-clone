import React from "react";
import "./Subtotal.scss";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

export default function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <>
        <p>
          Subtotal ({basket.length} items):
          <strong>
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(getBasketTotal(basket))}
          </strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" name="" id="" /> This Order Contains gift
        </small>
      </>
      <button>Proceed to Checkout</button>
    </div>
  );
}
