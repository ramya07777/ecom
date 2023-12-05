import React from "react";
import "./Payment.css";
import { useSelector } from "react-redux";
import PaySubtotal from "./PaySubtotal";
import FinalPay from "./FinalPay";

export default function Payment() {
  const Address = useSelector((state) => state.cartData.selectedAddress);

  // Check if Address is not null before accessing its properties
  const addressDetails =
    Address &&
    `${Address.street}, ${Address.city}, ${Address.states},${Address.zipcode}`;

  console.log("Selected Address:", Address);

  const cartItems = useSelector((state) => state.cartData.cart);
  return (
    <div className="payment">
      <div className="payment__payment">
        <div className="payment1">
          <h1>Summary</h1>
          {cartItems?.map((product) => (
            <div className="pay__pay" key={product.id}>
              <img className="pay__image" src={product.image} alt="" />
              <p className="pay__name">{product.name}</p>
              <p className="pay__price">${product.price * product.quantity}</p>
            </div>
          ))}
          <p className="setselect">Address</p>
          <p className="selected">{addressDetails} </p>
          <p className="setselect">Shipment method</p>
          <p className="selected">Free</p>
          <PaySubtotal />
        </div>

        <div className="payment2">
          <h1>Payment</h1>
          <FinalPay />
        </div>
      </div>
    </div>
  );
}
