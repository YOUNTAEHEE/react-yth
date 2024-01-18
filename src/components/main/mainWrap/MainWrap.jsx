import Anime from "../../../asset/anime";
import Btns from "../btns/Btns";
import Info from "../info/Info";
import Intro from "../intro/Intro";
import Quotes from "../quotes/Quotes";
import Visual from "../visual/Visual";
import "./MainWrap.scss";
import { useEffect } from "react";
export default function MainWrap() {
  useEffect(() => {
    new Anime(window, { scroll: 0 });
  }, []);

  return (
    <div className="MainWrap">
      <Visual />
      <Intro />
      <Quotes />
      <Info />
      <Btns />
    </div>
  );
}
