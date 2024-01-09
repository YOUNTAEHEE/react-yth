import { useSelector } from "react-redux";
import "./Quotes.scss";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useState } from "react";
export default function Quotes() {
  return (
    <>
      <figure className="Quotes">
        {/* <div className="lineBox">
          <div className="line"></div>
          <div className="line2"></div>
        </div> */}
        <div className="quotesBg1">
          <img
            src={process.env.PUBLIC_URL + "/img/quotesBg.jpg"}
            alt="quotesBg"
          />
        </div>
        <div className="quotesTxtBox">
          <div className="txt">
            <p>
              Metal made to measure with the colors to my choice made possible
              the ceiling of my dreams.
            </p>
            <p>STEFANI RODRIGUEZ</p>
          </div>
          {/* <div className="btnBox">
            <button className="quotesBtn">
              <GoArrowLeft />
            </button>
            <button
              className={`quotesBtn ${BtnNextOn}`}
              onClick={quotesBtnNext}
            >
              <GoArrowRight />
            </button>
          </div> */}
        </div>
      </figure>
    </>
  );
}