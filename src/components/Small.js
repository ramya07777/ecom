import React, { useState, useEffect } from "react";
import "./Small.css";
import PlayStation from "./images/PlayStation.png";
import head from "./images/head.png";
import vision from "./images/vision.png";
import pro from "./images/pro.png";
import phohead from "./images/phohead.png";
import phonevision from "./images/phonevision.png";
import phoneplay from "./images/phoneplay.png";
import phonebook from "./images/phonebook.png";
import { Link } from "react-router-dom";

export default function Small() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div class="wrapper">
      <div class="a">
        <img
          className="small__img"
          src={windowWidth >= 992 ? PlayStation : phoneplay}
          alt=""
        />

        <div className="one__small">
          <h1 className="small__play">Playstation 5</h1>
          <p className="small__para">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </div>

      <div class="box b">
        <div className="b__padding">
          <h1 className="bigbanner__head">Macbook Air</h1>
          <p className="small__para">
            The new 15‑inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <Link to={"/detail"}>
            <button className="bigbanner__button">Shop Now</button>
          </Link>
        </div>
        <img
          className="bigbanner__img"
          src={windowWidth >= 992 ? pro : phonebook}
          alt=""
        />
      </div>

      <div class="box c">
        <img
          className="square__img"
          src={windowWidth >= 992 ? head : phohead}
          alt=""
        />
        <div className="c__padding">
          <h1 className="square">Apple AirPods Max</h1>
          <p className="small__para">
            Computational audio. Listen, it's powerful
          </p>
        </div>
      </div>
      <div class="box d">
        <img
          className="square__rightimg"
          src={windowWidth >= 992 ? vision : phonevision}
          alt=""
        />
        <div className="d__padding">
          <h1 className="square__righthead">Apple Vision Pro</h1>
          <p className="small__para">
            An immersive way to experience entertainment
          </p>
        </div>
      </div>
    </div>
  );
}
