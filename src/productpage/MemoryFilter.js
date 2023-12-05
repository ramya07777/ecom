import React, { useState } from "react";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { sizeFilteredData } from "../Reduxtoolkit/Slice";
import { useDispatch } from "react-redux";
import "./Product.css";

export default function MemoryFilter() {
  const [Memory, setMemory] = useState(false);

  const [gbSize, setGbSize] = useState([]);

  const dispatch = useDispatch();

  const handleGbFilter = (e) => {
    const value = e.target.value;

    setGbSize((prevGbSize) => {
      const updatedGbSize = e.target.checked
        ? [...prevGbSize, value]
        : prevGbSize.filter((size) => size !== value);

      dispatch(sizeFilteredData(updatedGbSize));
      return updatedGbSize;
    });
  };

  console.log("gbsize", gbSize);
  return (
    <>
      <div
        className="product__pricediv"
        onClick={() => setMemory((prevPrice) => !prevPrice)}
      >
        <h1 className="product__price">Build-in Memory</h1>
        {Memory ? (
          <RiArrowDropDownLine className="productpro__icon" />
        ) : (
          <RiArrowDropUpLine className="productpro__icon" />
        )}
      </div>
      <div className="product__line"></div>
      {Memory && (
        <div>
          <div className="product__brand">
            <input
              type="checkbox"
              className="brand__check"
              value="16"
              onChange={(e) => handleGbFilter(e)}
            />
            <p className="check__para">16GB</p>
          </div>
          <div className="product__brand">
            <input
              type="checkbox"
              className="brand__check"
              value="64"
              onChange={(e) => handleGbFilter(e)}
            />
            <p className="check__para">64GB</p>
          </div>
          <div className="product__brand">
            <input
              type="checkbox"
              className="brand__check"
              value="128"
              onChange={(e) => handleGbFilter(e)}
            />
            <p className="check__para">128GB</p>
          </div>
          <div className="product__brand">
            <input
              type="checkbox"
              className="brand__check"
              value="256"
              onChange={(e) => handleGbFilter(e)}
            />
            <p className="check__para">256GB</p>
          </div>
        </div>
      )}
    </>
  );
}
