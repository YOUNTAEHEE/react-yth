import "./SubVisual.scss";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
export default function SubVisual() {
  return (
    <>
      <figure className="SubVisual">
        <div className="lineBox">
          <div className="line"></div>
          <div className="line2"></div>
        </div>
        <div className="subBg1">
          <img
            src={process.env.PUBLIC_URL + "/img/subVisualBg.jpg"}
            alt="subVisualBg"
          />
        </div>{" "}
        <div className="subVisualTxtBox">
          <div className="txt">
            <p>
              Metal made to measure with the colors to my choice made possible
              the ceiling of my dreams.
            </p>
            <p>STEFANI RODRIGUEZ</p>
          </div>
          <div className="btnBox">
            <button className="subVisualBtn">
              <GoArrowLeft />
            </button>
            <button className="subVisualBtn on">
              <GoArrowRight />
            </button>
          </div>
        </div>
      </figure>
    </>
  );
}
