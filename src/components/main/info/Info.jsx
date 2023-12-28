import { useState, useEffect } from "react";
import "./Info.scss";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import postData from "./dummyPosts.json";
export default function Info() {
  const getLocalData = () => {
    const data = localStorage.getItem("post");
    if (data) return JSON.parse(data);
    else return postData.dummyPosts;
  };
  const [Post] = useState(getLocalData());

  useEffect(() => {
    localStorage.setItem("post", JSON.stringify(Post));
  }, [Post]);
  return (
    <div className="Info">
      <div className="infoBg">
        <div className="bgPic">
          <img src={process.env.PUBLIC_URL + "/img/infoBg.jpg"} alt="infoBg" />
        </div>
      </div>

      <div className="showBoxWrap">
        <div className="showBoxNtit">
          <h2>Community</h2>
          {/* <button>
            <GoArrowLeft />
          </button> */}
          <div className="showBox">
            {Post.map((el, idx) => {
              if (idx >= 3) return null;
              return (
                <article key={el + idx}>
                  <div className="txt">
                    <div>
                      <p>{el.month}</p>
                      <p>{el.day}</p>
                    </div>
                    <h2>{el.title}</h2>
                    <p>{el.content}</p>
                  </div>
                </article>
              );
            })}
          </div>
          {/* <button className="on">
            <GoArrowRight />
          </button> */}
        </div>
      </div>
    </div>
  );
}