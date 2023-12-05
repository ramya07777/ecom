import React from "react";
import "./Catagory.css";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import {
  IoWatchOutline,
  IoCameraOutline,
  IoHeadsetOutline,
} from "react-icons/io5";
import { MdOutlineVideogameAsset } from "react-icons/md";

export default function Category() {
  return (
    <div className="cat">
      <div className="cat__cat">
        <h1 className="cat__head">Browse By Category</h1>
        <div className="cat__bottom">
          <div className="cat__center">
            <IoIosPhonePortrait className="cat__icon" />
            Phones
          </div>
          <div className="cat__center">
            <HiOutlineDesktopComputer className="cat__icon" />
            Computers
          </div>
          <div className="cat__center">
            <IoWatchOutline className="cat__icon" />
            Smart Watches
          </div>
          <div className="cat__center">
            <IoCameraOutline className="cat__icon" />
            Camera
          </div>
          <div className="cat__center">
            <IoHeadsetOutline className="cat__icon" />
            Headphones
          </div>
          <div className="cat__center">
            <MdOutlineVideogameAsset className="cat__icon" />
            Gaming
          </div>
        </div>
      </div>
    </div>
  );
}
