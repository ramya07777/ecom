import React, { useState } from "react";
import "./Product.css";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import { FaFilter } from "react-icons/fa6";

export default function Product() {
  const [isFilteropen, setIsFilterOpen] = useState(false);

  const filterHandler = () => {
    setIsFilterOpen(!isFilteropen);

    if (!isFilteropen && window.innerWidth < 688) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="product">
      <div className="product__product">
        <div className="filter" onClick={filterHandler}>
          <h2 className="filter__name">Filter</h2>
          <FaFilter className="filter__icon" />
        </div>
        <div className={`${isFilteropen ? "open" : "filterComponent "}`}>
          <Filter filterHandler={filterHandler} />
        </div>
        <div className="productrigtht">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
