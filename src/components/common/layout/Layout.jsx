import { useCallback, useEffect, useRef, useState } from "react";
import "./Layout.scss";
import { useScroll } from "../../../hooks/useScroll";
export default function Layout({ children, title }) {
  //const [Frame, setFrame] = useState(null);
  const refFrame = useRef(null);
  const refBtnTop = useRef(null);
  const { scrollTo, getCurrentScroll } = useScroll();

  const handleScroll = useCallback((num) => {
    getCurrentScroll(refFrame.current, 0) >= num
      ? refBtnTop.current?.classList.add("on")
      : refBtnTop.current?.classList.remove("on");
  });
  // useEffect(() => {
  //   setFrame(refFrame.current?.closest(".wrap"));
  // }, []);

  useEffect(() => {
    scrollTo(0);
  }, [scrollTo]);

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll(300));
  }, [getCurrentScroll, handleScroll]);
  return (
    <main ref={refFrame} className={`Layout ${title}`}>
      {children}

      <button ref={refBtnTop} className="btnTop" onClick={() => scrollTo(0)}>
        Top
      </button>
    </main>
  );
}
