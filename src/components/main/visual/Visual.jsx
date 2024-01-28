import "./Visual.scss";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
//import "swiper/css/pagination";
import { useCustomText } from "../../../hooks/useText";
import { useRef, useState } from "react";
import { useYoutubeQuery } from "../../../hooks/useYoutubeQuery";
import { useFlickrQuery } from "../../../hooks/useFlickrQuery";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
export default function Visual() {
  const swiperRef = useRef(null);
  const { data, isSuccess } = useYoutubeQuery();
  const { data: Pics, isSuccess: isPics } = useFlickrQuery({
    type: "interest",
  });
  const num = useRef(5);
  const [PrevIndex, setPrevIndex] = useState(0);
  const [Index, setIndex] = useState(0);
  const [NextIndex, setNextIndex] = useState(0);
  const [Version, setVersion] = useState(true);

  const shortenText = useCustomText("shorten");

  const swiperOption = useRef({
    modules: [Pagination, Autoplay],

    autoplay: { delay: 2000, disableOnInteraction: true },
    loop: true,
    centeredSlides: true,
    loopedSlides: num.current,

    onSwiper: (swiper) => {
      swiperRef.current = swiper;
    },
    onSlideChange: (swiper) => {
      setIndex(swiper.realIndex);
      swiper.realIndex === 0
        ? setPrevIndex(num.current - 1)
        : setPrevIndex(swiper.realIndex - 1);
      swiper.realIndex === num.current - 1
        ? setNextIndex(0)
        : setNextIndex(swiper.realIndex + 1);
    },
  });
  const trimTitle = (title) => {
    let resultTit = "";
    if (title.includes("(")) resultTit = title.split("(")[0];
    else if (title.includes("[")) resultTit = title.split("[")[0];
    else resultTit = title;
    return resultTit;
  };

  return (
    <>
      <figure className="Visual">
        <Swiper {...swiperOption.current}>
          {Version
            ? isSuccess &&
              data.map((vid, idx) => {
                if (idx >= num.current) return null;
                return (
                  <SwiperSlide key={vid.id}>
                    <div className="inner">
                      <div className="picBox">
                        <p>
                          <img
                            src={vid.snippet.thumbnails.standard.url}
                            alt={vid.snippet.title}
                          />
                        </p>
                        <p>
                          <img
                            src={vid.snippet.thumbnails.standard.url}
                            alt={vid.snippet.title}
                          />
                        </p>
                      </div>
                      <div className="txtBox">
                        <h2>{shortenText(trimTitle(vid.snippet.title), 50)}</h2>

                        <Link
                          to={`/detail/${vid.id}`}
                          onMouseEnter={swiperRef.current?.autoplay.stop}
                          onMouseLeave={swiperRef.current?.autoplay.start}
                        >
                          <span></span>View Detail
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            : isPics &&
              Pics.map((pic, idx) => {
                if (idx >= num.current) return null;
                return (
                  <SwiperSlide key={pic.id}>
                    <div className="inner">
                      <div className="picBox">
                        <p>
                          <img
                            src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
                            alt={pic.title}
                          />
                        </p>
                        <p>
                          <img
                            src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_b.jpg`}
                            alt={pic.title}
                          />
                        </p>
                      </div>
                      <div className="txtBox">
                        <h2>
                          {pic.title
                            ? shortenText(pic.title, 20)
                            : "Flickr Artist Image"}
                        </h2>

                        <Link
                          to={`/gallery`}
                          onMouseEnter={swiperRef.current?.autoplay.stop}
                          onMouseLeave={swiperRef.current?.autoplay.start}
                        >
                          <span></span>Go Gallery
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </figure>

      <nav className="stepBtns">
        <>
          <p className="versionBtn" onClick={() => setVersion(!Version)}>
            {Version ? "GALLERY" : "YOUTUBE"}
          </p>
          <p
            className="prevBox"
            onClick={() => swiperRef.current.slidePrev(400)}
          >
            <GrFormPrevious />
          </p>
          <p
            className="nextBox"
            onClick={() => swiperRef.current.slideNext(400)}
          >
            <MdNavigateNext />
          </p>
        </>
      </nav>
      <div className="visualVar">
        <div
          className="visualLine"
          style={{
            width: 100 / num.current + "%",
            left: (100 / num.current) * Index + "%",
          }}
        ></div>
      </div>
    </>
  );
}

//Swiper control child componen
// function Btns({ swiperRef, Rolling, setRolling }) {
//   const startRolling = () => {
//     swiperRef.current.slideNext(300);
//     swiperRef.current.autoplay.start();
//     setRolling(true);
//   };

//   const stopRolling = () => {
//     swiperRef.current.autoplay.stop();
//     setRolling(false);
//   };

//   return (
//     <nav className="swiperController">
//       {Rolling ? (
//         <button onClick={stopRolling}>
//           <IoPauseSharp />
//         </button>
//       ) : (
//         <button onClick={startRolling}>
//           <IoMdPlay />
//         </button>
//       )}
//     </nav>
//   );
// }
