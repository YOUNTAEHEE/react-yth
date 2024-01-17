import "./Quotes.scss";
export default function Quotes() {
  return (
    <>
      <figure className="Quotes">
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
        </div>
      </figure>
    </>
  );
}
