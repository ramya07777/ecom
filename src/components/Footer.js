import React from "react";
import "./Footer.css";
import Logo from "../Logowhite.png";
import { FaTwitter, FaFacebookF, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer" id="contact">
      <div className="footer__footer">
        <div className="item1">
          <img className="footer__img" src={Logo} alt="" />
          <p className="footer__left">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div className="item2">
          <p className="foot__para">Services</p>
          <p className="footer__right">Bonus program</p>
          <p className="footer__right">Gift cards</p>
          <p className="footer__right">Credit and payment</p>
          <p className="footer__right">Service contracts</p>
          <p className="footer__right">Non-cash </p>
          <p className="footer__right">account Payment</p>
        </div>
        <div className="item3">
          <p className="foot__para">Assistance to the buyer</p>
          <p className="footer__right">Find an order</p>
          <p className="footer__right">Terms of delivery</p>
          <p className="footer__right">Exchange and return of goods</p>
          <p className="footer__right">Guarantee</p>
          <p className="footer__right">Frequently asked questions</p>
          <p className="footer__right">Terms of use of the site</p>
        </div>
        <div className="item4">
          <FaTwitter className="footer__icon" />
          <FaFacebookF className="footer__icon" />
          <FaTiktok className="footer__icon" />
          <AiFillInstagram className="footer__icon" />
        </div>
      </div>
    </div>
  );
}
