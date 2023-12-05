import React from "react";
import "./FinalPay.css";
import card from "./Description.png";
import { Link } from "react-router-dom";

export default function FinalPay() {
  return (
    <>
      <img className="finalimg" src={card} alt="" />
      <div>
        <input type="text" className="final" placeholder="Cardholder Name" />
        <input type="text" className="final" placeholder="Card Number" />
        <div className="final__final">
          <input type="text" className="final__card" placeholder="Exp.Date" />
          <input type="text" className="final__card" placeholder="CCV" />
        </div>
        <div className="final__final">
          <Link to={"/check"} className="pay__link">
            <button className="final__back final__button">Back</button>
          </Link>
          <button className="final__pay final__button">Pay</button>
        </div>
      </div>
    </>
  );
}
