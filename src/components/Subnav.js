import React from 'react';
import "./Subnav.css";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoWatchOutline, IoCameraOutline, IoHeadsetOutline } from "react-icons/io5";
import { MdOutlineVideogameAsset } from "react-icons/md";


export default function Subnav() {
  return (
    <div className='subnav'>
      <div className="p-2 sub__head">
<IoIosPhonePortrait className="sub__icon" />
Phones
      </div>
      <div className='sub__border'></div>

     <div className="p-2 sub__head">
      <HiOutlineDesktopComputer className="sub__icon" />
Computers
      </div>
      <div className='sub__border'></div>
      <div className="p-2 sub__head">
      <IoWatchOutline className="sub__icon" />
      Smart Watches

      </div>
      <div className='sub__border'></div>

      <div className="p-2 sub__head">
<IoCameraOutline className="sub__icon" />
Camera
      </div>
      <div className='sub__border'></div>
      <div className="p-2 sub__head">
      <IoHeadsetOutline className="sub__icon" />
        Headphones
      </div>
      <div className='sub__border'></div>
      <div className="p-2 sub__head">
      <MdOutlineVideogameAsset className="sub__icon" />
        Gaming
      </div>
  
    </div>
  )
}
