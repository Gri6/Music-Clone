import React from "react";
import Artist from "../img/artist.jpg";
import Check from "../img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="banner">
      <img className="bannerImg" src={Artist} />

      <div className="content">
        <div className="breadCrump">
          <p>
            Home <span>\ Popular Artist</span>
          </p>

          <i>
            <FaEllipsisH />
          </i>
        </div>       

        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>A-Ha</h2>
              <img src={Check} />
            </div>

            <p>
              <i>
                <FaHeadphones />
              </i>
              11,184,193 <span>Monthly listers</span>
            </p>
          </div>
          <div className="right">
            <a href="#">Play</a>
            <a href="#">
              <i>
                <FaCheck />
              </i>
              Following
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Banner };
