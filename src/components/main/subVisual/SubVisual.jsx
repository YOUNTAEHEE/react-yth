import "./SubVisual.scss";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
export default function SubVisual() {
  return (
    <>
      <div className="subVisualTxtBox">
        <div className="txt">
          <p>
            Metal made to measure with the colors to my choice made possible the
            ceiling of my dreams.
          </p>
          <p>STEFANI RODRIGUEZ</p>
        </div>
        <div className="btnBox">
          <button>
            <GoArrowLeft />
          </button>
          <button className="on">
            <GoArrowRight />
          </button>
        </div>
      </div>
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
        </div>
      </figure>
    </>
  );
}
