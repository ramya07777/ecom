import React, { useState } from "react";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { brandFilteredData } from "../Reduxtoolkit/Slice";
import { useDispatch } from "react-redux";
import "./Product.css";

export default function BrandFilter() {
  const [brand, setBrand] = useState(false);
  const [brandName, setBrandName] = useState([]);
  const dispatch = useDispatch();

  const handleBrandFilter = (e) => {
    const value = e.target.name;

    setBrandName((prevBrand) => {
      const updatedBrand = e.target.checked
        ? [...prevBrand, value]
        : prevBrand.filter((brand) => brand !== value);

      dispatch(brandFilteredData(updatedBrand));
      return updatedBrand;
    });
  };

  console.log("filter brand", brandName);
  return (
    <>
      <div
        className="product__pricediv"
        onClick={() => setBrand((prevPrice) => !prevPrice)}
      >
        <h1 className="product__price">Brand</h1>
        {brand ? (
          <RiArrowDropDownLine className="productpro__icon" />
        ) : (
          <RiArrowDropUpLine className="productpro__icon" />
        )}
      </div>
      <div className="product__line"></div>
      {brand && (
        <div>
          <div className="product__brand">
            <input
              type="checkbox"
              className="brand__check"
              name="Apple"
              onChange={(e) => handleBrandFilter(e)}
            />
            <p className="check__para">Apple</p>
          </div>
          <div className="product__brand">
            <input
              type="checkbox"
              className="brand__check"
              name="Samsung"
              onChange={(e) => handleBrandFilter(e)}
            />
            <p className="check__para">Samsung</p>
          </div>
          <div className="product__brand">
            <input
              type="checkbox"
              className="brand__check"
              name="Poco"
              onChange={(e) => handleBrandFilter(e)}
            />
            <p className="check__para">Poco</p>
          </div>
        </div>
      )}
    </>
  );
}
