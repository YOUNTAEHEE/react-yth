import { useEffect, useRef } from "react";
import "./Layout.scss";
import { useScroll } from "../../../hooks/useScroll";

export default function Layout({ children, title }) {
  const refBtnTop = useRef(null);

  const handleCustomScroll = (scroll) => {
    scroll >= 100
      ? refBtnTop.current?.classList.add("on")
      : refBtnTop.current?.classList.remove("on");
  };
  const { scrollTo, refEl } = useScroll(handleCustomScroll, 0);

  useEffect(() => {
    scrollTo(0);
    setTimeout(() => {
      refEl.current?.classList.add("on");
    }, 300);
  }, [scrollTo, refEl]);

  return (
    <main ref={refEl} className={`Layout ${title}`}>
      {children}
      <button ref={refBtnTop} className="btnTop" onClick={() => scrollTo(0)}>
        Top
      </button>
    </main>
  );
}
