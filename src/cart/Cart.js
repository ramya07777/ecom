import React, { useState, useEffect } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeCart,
} from "../Reduxtoolkit/Slice";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
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

  const handleRemoveItem = (productId) => {
    dispatch(removeCart(productId));
  };

  return (
    <div className="cart">
      {cartItems.length !== 0 ? (
        <div className="cart__center">
          <div className="cart1">
            <h1>Shopping Cart</h1>

            {cartItems?.map((props) => (
              <>
                <div className="cart__cart" key={props.id}>
                  <img className="cart__image" src={props.image} alt="" />
                  <div className="cart_img">
                    <p className="cart__name">{props.name}</p>
                    <div className="cart__but">
                      <button
                        className="cart__button"
                        onClick={() => dispatch(decreaseQuantity(props.id))}
                      >
                        -
                      </button>
                      <p className="cart__qant">{props.quantity}</p>
                      <button
                        className="cart__button"
                        onClick={() => dispatch(increaseQuantity(props.id))}
                      >
                        +
                      </button>

                      <div className="cart__open">
                        <p className="cart__price">
                          ${props.price * props.quantity}
                        </p>
                        <IoMdClose
                          className="cart__close"
                          onClick={() => handleRemoveItem(props.id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="cart2">
            <h1>Order Summary</h1>
            <div>
              <label className="cart__label">Discount code / Promo code</label>
            </div>
            <input className="cart__input" type="text" placeholder="code" />
            <div>
              <label className="cart__label">Your bonus card number</label>
            </div>
            <input
              className="cart__input"
              type="text"
              placeholder="Enter Card Number"
            />
            <div className="d-flex mb-4">
              <p className="cart__sub">Subtotal</p>
              <p className="sub__price">${subtotal.toFixed(2)}</p>
            </div>
            <div className="d-flex mb-4">
              <p className="cart__tax">Estimated Tax</p>
              <p className="sub__price">${tax.toFixed(2)}</p>
            </div>
            <div className="d-flex mb-4">
              <p className="cart__tax">Estimated shipping & Handling</p>
              <p className="sub__price">${shipping.toFixed(2)}</p>
            </div>
            <div className="d-flex mb-4">
              <p className="cart__sub">Total</p>
              <p className="sub__price">${total.toFixed(2)}</p>
            </div>
            <Link to={"/check"}>
              <button className="check__button">Procced to Checkout</button>
            </Link>
          </div>
        </div>
      ) : (
        <h1 className="cartEmptyText">Cart is empty</h1>
      )}
    </div>
  );
}
