import React from "react";
import Subtotal from "./Subtotal";
import "./Checkout.scss";

export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__title">
          <h2>Your Cart</h2>{" "}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
