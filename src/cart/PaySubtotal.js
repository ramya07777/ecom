import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./PaySubtotal.css";

export default function PaySubtotal() {
  const cartItems = useSelector((state) => state.cartData.cart);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate subtotal
    const subtotalValue = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(subtotalValue);

    // Calculate estimated tax (you can adjust the tax rate)
    const taxRate = 0.07; // 7% tax rate
    const taxValue = subtotalValue * taxRate;
    setTax(taxValue);

    // Estimated shipping & handling (you can adjust the shipping rate)
    const shippingRate = 0.03; // $3 shipping rate
    const shippingValue = subtotalValue * shippingRate;
    setShipping(shippingValue);

    // Calculate total
    const totalValue = subtotalValue + taxValue + shippingValue;
    setTotal(totalValue);
  }, [cartItems]);

  return (
    <>
      <div className="d-flex mb-4 w-100">
        <p className="pay__sub">Subtotal</p>
        <p className="pay__price">${subtotal.toFixed(2)}</p>
      </div>
      <div className="d-flex mb-4 w-100">
        <p className="pay__tax">Estimated Tax</p>
        <p className="pay__price">${tax.toFixed(2)}</p>
      </div>
      <div className="d-flex mb-4 w-100">
        <p className="pay__tax">Estimated shipping & Handling</p>
        <p className="pay__price">${shipping.toFixed(2)}</p>
      </div>
      <div className="d-flex mb-4 w-100">
        <p className="pay__sub">Total</p>
        <p className="pay__price">${total.toFixed(2)}</p>
      </div>
    </>
  );
}
