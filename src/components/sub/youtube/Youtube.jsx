import { useEffect, useRef, useState } from "react";
import Layout from "../../common/layout/Layout";
import "./Youtube.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useCustomText } from "../../../hooks/useText";
import { useSelector } from "react-redux";

export default function Youtube() {
  const Vids = useSelector((store) => store.youtubeReducer.youtube);

  const monthName = [
    "Jan",
    "Feb",
    "Marc",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const shortenText = useCustomText("shorten");
  const path = useRef(process.env.PUBLIC_URL);

  return (
    <Layout title={"Youtube"}>
      <h2>YOUN Youtube</h2>
      <div className="con1">
        {Vids.slice(0, 3).map((data) => {
          const [date, time] = data.snippet.publishedAt.split("T");
          const [year, month, day] = date.split("-");
          return (
            <article key={data.id}>
              <div className="pic">
                <Link to={`/detail/${data.id}`}>
                  <img
                    src={data.snippet.thumbnails.standard.url}
                    alt={data.snippet.title}
                  />
                </Link>
                <div className="date">
                  <div>{day}</div>
                  <div>{monthName[month - 1]}</div>
                </div>
              </div>

              <h3>{shortenText(data.snippet.title, 50)}</h3>
              <p>by. {shortenText(data.snippet.videoOwnerChannelTitle, 25)}</p>
            </article>
          );
        })}
      </div>
      <div className="con2">
        <img src={`${path.current}/img/youtubeCon2Pic.jpg`} alt="공원사진" />
        <p>Walk Don't Run</p>
      </div>
      <div className="con3">
        {Vids.slice(3).map((data, index) => {
          const [date, time] = data.snippet.publishedAt.split("T");
          const [year, month, day] = date.split("-");
          return (
            <div className="articleWrap" key={data.id}>
              <article>
                <div className="con3Pic">
                  <Link to={`/detail/${data.id}`}>
                    <img
                      src={data.snippet.thumbnails.standard.url}
                      alt={data.snippet.title}
                    />
                  </Link>
                </div>
                <div className="con3Date">
                  <div>{day}</div>
                  <div>{monthName[month - 1]}</div>
                </div>
              </article>
              <div className="txt">
                <h3>{shortenText(data.snippet.title, 50)}</h3>
                <p>
                  by. {shortenText(data.snippet.videoOwnerChannelTitle, 25)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
