import { useSelector } from "react-redux";
import "./Quotes.scss";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useState } from "react";
export default function Quotes() {
  const quotesReducer = useSelector((store) => store.quotesReducer);
  const QuotesData = Object.values(quotesReducer.quotes)[0];

  return (
    <>
      <figure className="Quotes">
        <div className="lineBox">
          <div className="line"></div>
          <div className="line2"></div>
        </div>
        <div className="quotesBg1">
          <img
            src={process.env.PUBLIC_URL + "/img/quotesBg.jpg"}
            alt="quotesBg"
          />
        </div>
        <div className="quotesTxtBox">
          {QuotesData?.map((data, idx) => {
            return (
              <div className="txt" key={data + idx}>
                <p>{data.message}</p>
                <p>{data.name}</p>
              </div>
            );
          })}
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
