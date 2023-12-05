import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineAccountBox } from "react-icons/md";
import Logo from "../Logo.png";
import { useSelector } from "react-redux";

export default function Header() {
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const cartitems = useSelector((state) => state.cartData.cart);

  const totalQuantity = cartitems?.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
    document.body.style.overflow = navbarExpanded ? "auto" : "hidden";
  };

  const handleNavLinkClick = () => {
    setNavbarExpanded(false);
    document.body.style.overflow = "auto";
  };
  return (
    <Navbar
      expand="lg"
      className="p-3"
      expanded={navbarExpanded}
      onToggle={handleNavbarToggle}
    >
      <Container className="header d-flex justify-content-center align-items-center fluid">
        <Link to={"/"} className="navbar__brand">
          <img className="head__brand" src={Logo} alt="" />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <div className="header__nav">
            <div className="header__input mx-4">
              <CiSearch />
              <input
                className="header__search"
                placeholder="search"
                type="text"
              />
            </div>

            <div className="header__left">
              <Link
                to={"/"}
                className="navbar__link"
                onClick={handleNavLinkClick}
              >
                <p className="header__link">Home</p>
              </Link>
              <Link
                to={"/product"}
                className="navbar__link"
                onClick={handleNavLinkClick}
              >
                <p className="header__link">Products</p>
              </Link>

              <a
                href="#contact"
                className="navbar__link"
                onClick={handleNavLinkClick}
              >
                <p className="header__link">Contact Us</p>
              </a>

              <p className="header__link" onClick={handleNavLinkClick}>
                Blog
              </p>

              <GoHeart
                className="header__link link"
                onClick={handleNavLinkClick}
              />

              <Link
                to={"/cart"}
                className="navbar__link"
                onClick={handleNavLinkClick}
              >
                <div className="d-flex">
                  <BsCart3 className="header__link link" />
                  <span className="countIcon">{totalQuantity}</span>
                </div>
              </Link>
              <MdOutlineAccountBox
                className="header__link link"
                onClick={handleNavLinkClick}
              />
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
