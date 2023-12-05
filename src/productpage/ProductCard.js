import React, { useState } from "react";
import "./ProductCard.css";
import detailproduct from "./detailproduct";
import { FaRegHeart } from "react-icons/fa";
import { addCart } from "../Reduxtoolkit/Slice";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";

export default function ProductCard() {
  const filteredData = useSelector((state) => state.cartData.filterProduct);

  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addCart(product));
    console.log(product);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const onPageChange = (page) => {
    setCurrentPage(page);
    console.log("Current Page:", page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedProducts = detailproduct.slice(startIndex, endIndex);
  const totalproducts = detailproduct.length;
  console.log("Start Index:", startIndex);
  console.log("End Index:", endIndex);

  return (
    <div className="product__below">
      {filteredData.length > 0
        ? filteredData.map((product) => (
            <div className="product__bottom " key={product.id}>
              <div className="icon__product">
                <FaRegHeart className="product__icon" />
              </div>

              <img className="product__image" src={product.image} alt="" />
              <p className="product__name">{product.name}</p>
              <p className="product__price">${product.price}</p>
              <button
                className="product__button"
                onClick={() => addToCart(product)}
              >
                Buy Now
              </button>
            </div>
          ))
        : displayedProducts.map((product) => (
            <div className="product__bottom " key={product.id}>
              <div className="icon__product">
                <FaRegHeart className="product__icon" />
              </div>

              <img className="product__image" src={product.image} alt="" />
              <p className="product__name">{product.name}</p>
              <p className="product__price">${product.price}</p>
              <button
                className="product__button"
                onClick={() => addToCart(product)}
              >
                Buy Now
              </button>
            </div>
          ))}

      <Pagination
        className="page"
        onChange={onPageChange} // Add this line
        defaultCurrent={currentPage}
        pageSize={pageSize}
        total={totalproducts}
      />
    </div>
  );
}
