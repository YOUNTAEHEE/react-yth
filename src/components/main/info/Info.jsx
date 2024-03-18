import { useState, useEffect } from "react";
import "./Info.scss";
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
    <div className="Info myScroll">
      <div className="infoBg">
        <div className="bgPic">
          <img src={process.env.PUBLIC_URL + "/img/infoBg.jpg"} alt="infoBg" />
        </div>
      </div>

      <div className="showBoxWrap">
        <div className="showBoxNtit">
          <h2>Community</h2>

          <div className="showBox">
            {Post.map((el, idx) => {
              if (idx >= 3) return null;
              return (
                <article key={el + idx}>
                  <div className="txt">
                    <div>
                      <p>{el.month < 10 ? "0" + el.month : el.month}</p>
                      <p>{el.day < 10 ? "0" + el.day : el.day}</p>
                    </div>
                    <h2>{el.title}</h2>
                    <p>{el.content}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
