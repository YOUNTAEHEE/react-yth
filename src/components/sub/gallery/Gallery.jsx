import { useEffect, useRef, useState } from "react";
import Layout from "../../common/layout/Layout";
import "./Gallery.scss";
import Masonry from "react-masonry-component";
import { useCustomText } from "../../../hooks/useText";
import { LuSearch } from "react-icons/lu";
import Modal from "../../common/modal/Modal";
import { useDispatch } from "react-redux";
import * as types from "../../../redux/action";
export default function Gallery() {
  const [Mounted, setMounted] = useState(true);
  const dispatch = useDispatch();
  const [Index, setIndex] = useState(0);
  const searched = useRef(false);

  const myID = useRef("199625511@N07");
  const isUser = useRef(myID.current);

  const gap = useRef(20);
  const refNav = useRef(null);

  const refFrmaeWrap = useRef(null);
  const [Pics, setPics] = useState([]);
  const shortenText = useCustomText("shorten");

  const activateBtn = (e) => {
    const btns = refNav.current.querySelectorAll("button");
    btns.forEach((btn) => btn.classList.remove("on"));
    e && e.target.classList.add("on");
  };

  const handleInterest = (e) => {
    if (e.target.classList.contains("on")) return;
    isUser.current = "";
    activateBtn(e);
    fetchFlickr({ type: "interest" });
  };

  const handleMine = (e) => {
    console.log("btn");
    console.log("myID", myID.current);
    console.log("isUser", isUser.current);
    if (e.target.classList.contains("on") || isUser.current === myID.current)
      return;
    isUser.current = myID.current;
    activateBtn(e);
    fetchFlickr({ type: "user", id: myID.current });
  };
  const handleUser = (e) => {
    console.log("handleMine called");
    console.log("isUser.current:", isUser.current);
    console.log("myID.current:", myID.current);
    if (isUser.current) return;
    isUser.current = e.target.innerText;
    activateBtn();
    fetchFlickr({ type: "user", id: e.target.innerText });
  };
  const handleSearch = (e) => {
    console.log("handleMine called");
    console.log("isUser.current:", isUser.current);
    console.log("myID.current:", myID.current);
    e.preventDefault();
    isUser.current = "";
    activateBtn();
    const keyword = e.target.children[0].value;
    if (!keyword.trim()) return;
    e.target.children[0].value = "";
    fetchFlickr({ type: "search", keyword: keyword });
    searched.current = true;
  };
  const fetchFlickr = async (opt) => {
    const num = 50;
    const flickr_api = process.env.REACT_APP_FLICKR_API;
    const baseURL = `https://www.flickr.com/services/rest/?api_key=${flickr_api}&per_page=${num}&format=json&nojsoncallback=1&method=`;
    const method_interest = "flickr.interestingness.getList";
    const method_user = "flickr.people.getPhotos";
    const method_search = "flickr.photos.search";
    const interestURL = `${baseURL}${method_interest}`;
    const userURL = `${baseURL}${method_user}&user_id=${opt.id}`;
    const searchURL = `${baseURL}${method_search}&tags=${opt.keyword}`;

    let url = "";
    opt.type === "user" && (url = userURL);
    opt.type === "interest" && (url = interestURL);
    opt.type === "search" && (url = searchURL);
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
    setPics(json.photos.photo);
  };
  useEffect(() => {
    refFrmaeWrap.current.style.setProperty("--gap", gap.current + "px");
    fetchFlickr({ type: "user", id: myID.current });
  }, []);

  useEffect(() => {
    return () => setMounted(false);
  }, [Mounted]);

  return (
    <>
      <Layout title={"Gallery"}>
        <article className="controls">
          <nav className="btnSet" ref={refNav}>
            <button onClick={handleInterest}>Interest Gallery</button>
            <button className="on" onClick={handleMine}>
              My Gallery
            </button>
          </nav>

          <form onSubmit={handleSearch}>
            <input type="text" placeholder="Search" />

            <button className="btnSearch">
              <LuSearch />
            </button>
          </form>
        </article>
        <section className="frameWrap" ref={refFrmaeWrap}>
          <Masonry
            className={"frame"}
            options={{ transitionDuration: "0.5s", gutter: gap.current }}
          >
            {searched.current && Pics.length === 0 ? (
              <h2>해당 키워드에 대한 검색 결과가 없습니다.</h2>
            ) : (
              Mounted &&
              Pics.map((pic, idx) => {
                return (
                  <article key={pic.id}>
                    <div className="pic">
                      <img
                        src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
                        alt={pic.title}
                      />
                    </div>

                    <div className="txt">
                      <i onClick={handleUser}>{pic.owner}</i>
                      <h2>{shortenText(pic.title, 20)}</h2>
                      <div className="viewBox">
                        <p className="line"></p>
                        <p
                          onClick={() => {
                            dispatch({
                              type: types.MODAL.start,
                              payload: true,
                            });
                            setIndex(idx);
                          }}
                        >
                          view
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </Masonry>
        </section>
      </Layout>
      <Modal>
        {Mounted && Pics.length !== 0 && (
          <img
            src={`https://live.staticflickr.com/${Pics[Index].server}/${Pics[Index].id}_${Pics[Index].secret}_b.jpg`}
            alt={Pics[Index].title}
          />
        )}
      </Modal>
    </>
  );
}
