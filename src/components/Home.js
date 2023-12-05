import React from "react";
import "./Home.css";
import detailhome from "./detailhome";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import  { addCart } from "../Reduxtoolkit/Slice";

export default function Home() {

  const dispatch = useDispatch();


  const addToCart = (product) => {
    dispatch(addCart(product));
    console.log(product);
  };



  return (
    <div className="home__home">
      <div className="home">
        <div className="home__top">
          <p className="home__para">New Arrival</p>
          <p className="home__para">Bestseller</p>
          <p className="home__para">Featured Products</p>
        </div>
        <div className="home__below">
          {detailhome.map((product) => (
            <div className="home__bottom " key={product.id}>
              <div className="icon__homediv">
                <FaRegHeart className="home__icon" />
              </div>

              <img className="home__image" src={product.image} alt="" />
              <p className="home__name">{product.name}</p>
              <p className="home__price">${product.price}</p>
              <button onClick={() => addToCart(product)} className="home__button">Buy Now</button>
      
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
