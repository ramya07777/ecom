import React from "react";
import "./Banner.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import iphone from "../Iphone.png";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="banner">
      <Row className="banner__row">
        <Col
          className="d-flex flex-column justify-content-center align-items-center "
          lg={6}
          xs={12}
        >
          <div className="banner__funct">
            <p className="banner__para mb-3">Pro.Beyond.</p>
            <h1 className="banner__head mb-4">
              IPhone 14 <span className="span__text">Pro</span>
            </h1>
            <p className="banner__banner mb-5">
              Created to change everything for the better. For everyone
            </p>
            <Link to={"/detail"} className="shop__link">
              <button className="banner__button mb-3">Shop Now</button>
            </Link>
          </div>
        </Col>
        <Col
          className="d-flex justify-content-center align-items-center "
          lg={6}
          xs={12}
        >
          <img className="banner__img" src={iphone} alt="" />
        </Col>
      </Row>
    </div>
  );
}
