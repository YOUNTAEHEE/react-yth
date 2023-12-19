import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import Department from "./components/sub/department/Department";
import Community from "./components/sub/community/Community";
import Members from "./components/sub/Members/Members";
import Gallery from "./components/sub/gallery/Gallery";
import Youtube from "./components/sub/youtube/Youtube";
import Contact from "./components/sub/contact/Contact";
import MainWrap from "./components/main/mainWrap/MainWrap";
import "./globalStyles/Variables.scss";
import "./globalStyles/Reset.scss";
import { useState, useRef, useCallback, useEffect } from "react";
import Menu from "./components/common/menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { useMedia } from "./hooks/useMedia";
import Detail from "./components/sub/youtube/Detail";
import * as types from "./redux/action";
function App() {
  const dispatch = useDispatch();
  const Dark = useSelector((store) => store.darkReducer.dark);

  const path = useRef(process.env.PUBLIC_URL);

  const fetchActive = useCallback(async () => {
    const data = await fetch(`${path.current}/DB/departmentCon1.json`);
    const json = await data.json();
    dispatch({ type: types.ACTIVE.success, payload: json });
  }, [dispatch]);

  const fetchMember = useCallback(async () => {
    const data = await fetch(`${path.current}/DB/departmentCon2.json`);
    const json = await data.json();
    dispatch({ type: types.MEMBER.success, payload: json });
  }, [dispatch]);

  const fetchYoutube = useCallback(async () => {
    const api_key = process.env.REACT_APP_YOUTUBE_API;
    const pid = process.env.REACT_APP_YOUTUBE_LIST;
    const num = 11;
    const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;
    try {
      const data = await fetch(baseURL);
      const json = await data.json();
      dispatch({ type: types.YOUTUBE.success, payload: json.items });
    } catch (err) {
      dispatch({ type: types.YOUTUBE.fail, payload: err });
    }
  }, [dispatch]);
  useEffect(() => {
    fetchActive();
    fetchMember();
    fetchYoutube();
  }, [fetchActive, fetchMember, fetchYoutube]);
  return (
    <div className={`wrap ${Dark ? "dark" : ""} ${useMedia()}`}>
      <Header />
      <Route exact path="/" component={MainWrap} />
      <Route path="/department" component={Department} />
      <Route path="/youtube" component={Youtube} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/community" component={Community} />
      <Route path="/members" component={Members} />
      <Route path="/contact" component={Contact} />
      <Footer />
      <Menu />
    </div>
  );
}

export default App;
