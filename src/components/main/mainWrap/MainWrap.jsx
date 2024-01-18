import Btns from "../btns/Btns";
import Info from "../info/Info";
import Intro from "../intro/Intro";
import Quotes from "../quotes/Quotes";
import Visual from "../visual/Visual";
import "./MainWrap.scss";
import { useEffect } from "react";
import { useScroll } from "../../../hooks/useScroll";

export default function MainWrap() {
  const { scrollTo } = useScroll();

  useEffect(() => {
    scrollTo(0);
  }, [scrollTo]);

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
