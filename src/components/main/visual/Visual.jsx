import "./Visual.scss";

export default function Visual() {
  
  return (
    <>
      <figure className="Visual">
        <div className="visualList">
          <img src={process.env.PUBLIC_URL + "/img/visual1.jpg"} alt="visual1" />
          <img src={process.env.PUBLIC_URL + "/img/visual2.jpg"} alt="visual2" />
        </div>
      </figure>
      {/* <div className="visualVar">
        <div className="visualLine"></div>
      </div> */}
    </>
  );
}