import React, { useState } from "react";
import "./Product.css";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import BrandFilter from "./BrandFilter";
import MemoryFilter from "./MemoryFilter";
import { useDispatch, useSelector } from "react-redux";
import { allFilteredData } from "../Reduxtoolkit/Slice";
import detailproduct from "./detailproduct";

export default function Filter({ filterHandler }) {
  const [price, setPrice] = useState(false);
  const dispatch = useDispatch();
  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");
  const brandName = useSelector((state) => state.cartData.brandData);
  const sizeDetails = useSelector((state) => state.cartData.sizeData);

  const handleApplyFilter = () => {
    let filteredData = detailproduct;
    if (fromPrice !== null && toPrice !== null) {
      filteredData = filteredData.filter(
        (product) => product.price >= fromPrice && product.price <= toPrice
      );
    }

    if (brandName && brandName.length > 0) {
      const brandFilterCondition = (product) =>
        brandName.some((brand) =>
          product.name.toLowerCase().includes(brand.toLowerCase())
        );

      filteredData = detailproduct.filter(brandFilterCondition);
      console.log("barand func", filteredData);
    }

    if (sizeDetails && sizeDetails.length > 0) {
      const sizeFilterCondition = (product) =>
        sizeDetails.some((size) =>
          product.name.toLowerCase().includes(size.toLowerCase())
        );

      filteredData = detailproduct.filter(sizeFilterCondition);
    }
    filterHandler();
    dispatch(allFilteredData(filteredData));
  };
  return (
    <>
      <div className="productleft">
        <div
          className="product__pricediv"
          onClick={() => setPrice((prevPrice) => !prevPrice)}
        >
          <h1 className="product__price">Price</h1>
          {price ? (
            <RiArrowDropDownLine className="productpro__icon" />
          ) : (
            <RiArrowDropUpLine className="productpro__icon" />
          )}
        </div>
        <div className="product__line"></div>
        {price && (
          <div className="product__priceinput">
            <div className="product__input">
              <label className="product__labal">From</label>
              <input
                className="labal__input"
                type="number"
                value={fromPrice}
                onChange={(e) => setFromPrice(e.target.value)}
              />
            </div>
            <div className="product__input">
              <label className="product__labal">To</label>
              <input
                className="labal__input"
                type="number"
                value={toPrice}
                onChange={(e) => setToPrice(e.target.value)}
              />
            </div>
          </div>
        )}
        <BrandFilter />
        <MemoryFilter />
        <div className="button__button">
          <button className="product__apply" onClick={handleApplyFilter}>
            Apply
          </button>
        </div>
      </div>
    </>
  );
}
