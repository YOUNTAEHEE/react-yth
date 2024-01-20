import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import Department from "./components/sub/department/Department";
import Community from "./components/sub/community/Community";
import Members from "./components/sub/members/Members";
import Gallery from "./components/sub/gallery/Gallery";
import Youtube from "./components/sub/youtube/Youtube";
import Contact from "./components/sub/contact/Contact";
import MainWrap from "./components/main/mainWrap/MainWrap";
import "./globalStyles/Variables.scss";
import "./globalStyles/Reset.scss";
import { useEffect } from "react";
import Menu from "./components/common/menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { useMedia } from "./hooks/useMedia";
import Detail from "./components/sub/youtube/Detail";
import { fetchActive } from "./redux/activeSlice";
import { fetchFlickr } from "./redux/flickrSlice";
import { fetchMember } from "./redux/memberSlice";
import { fetchYoutube } from "./redux/youtubeSlice";
function App() {
  const dispatch = useDispatch();
  const Dark = useSelector((store) => store.dark.isDark);

  useEffect(() => {
    dispatch(fetchActive());
    dispatch(fetchFlickr({ type: "user", id: "199625511@N07" }));
    dispatch(fetchMember());
    dispatch(fetchYoutube());
  }, [dispatch]);
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
