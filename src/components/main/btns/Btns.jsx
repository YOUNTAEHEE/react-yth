import Anime from "../../../asset/anime";
import { useCallback, useEffect, useRef, useState } from "react";
import "./Btns.scss";
import { useThrottle } from "../../../hooks/useThrottle";
export default function Btns(opt) {
  const defOpt = useRef({
    frame: ".wrap",
    items: ".myScroll",
    base: -window.innerHeight / 2,
    isAuto: false,
  });
  const resultOpt = useRef({ ...defOpt.current, ...opt });
  const [Num, setNum] = useState(0);

  const isAutoScroll = useRef(resultOpt.current.isAuto);
  const wrap = useRef(null);
  const secs = useRef(null);
  const btns = useRef(null);
  const baseLine = useRef(resultOpt.current.base);
  const isMotion = useRef(false);
  const activation = () => {
    const scroll = wrap.current?.scrollTop;

    secs.current.forEach((_, idx) => {
      if (scroll >= secs.current[idx].offsetTop + baseLine.current) {
        const btnsArr = btns.current?.querySelectorAll("li");
        btnsArr?.forEach((btn) => btn.classList.remove("on"));
        btns.current?.querySelectorAll("li")[idx]?.classList.add("on");
      }
    });
  };

  const moveScroll = (idx) => {
    if (isMotion.current) return;
    isMotion.current = true;
    new Anime(
      wrap.current,
      { scroll: secs.current[idx].offsetTop },
      { callback: () => (isMotion.current = false) }
    );
  };

  const autoScroll = useCallback(
    (e) => {
      const btnsArr = Array.from(btns.current.children);
      const activeEl = btns.current.querySelector("li.on");
      const activeIndex = btnsArr.indexOf(activeEl);

      if (e.deltaY > 0) {
        activeIndex !== Num - 1 && moveScroll(activeIndex + 1);
      } else {
        activeIndex !== 0 && moveScroll(activeIndex - 1);
      }
    },
    [Num]
  );

  const modifyPos = () => {
    const btnsArr = Array.from(btns.current.children);
    const activeEl = btns.current.querySelector("li.on");
    const activeIndex = btnsArr.indexOf(activeEl);
    wrap.current.scrollTop = secs.current[activeIndex].offsetTop;
  };

  const throttledActivation = useThrottle(activation);
  const throttleModifyPos = useThrottle(modifyPos, 200);
  useEffect(() => {
    wrap.current = document.querySelector(resultOpt.current.frame);
    secs.current = wrap.current.querySelectorAll(resultOpt.current.items);
    setNum(secs.current.length);

    window.addEventListener("resize", throttleModifyPos);
    wrap.current.addEventListener("scroll", throttledActivation);
    isAutoScroll.current &&
      wrap.current.addEventListener("mousewheel", autoScroll);
    return () => {
      window.removeEventListener("resize", throttleModifyPos);
      wrap.current.removeEventListener("scroll", throttledActivation);
      wrap.current.removeEventListener("mousewheel", autoScroll);
    };
  }, [
    throttleModifyPos,
    throttledActivation,
    autoScroll,
    resultOpt.current.frame,
    resultOpt.current.items,
  ]);

  return (
    <ul className="Btns" ref={btns}>
      {Array(Num)
        .fill()
        .map((_, idx) => {
          return (
            <li
              key={idx}
              className={idx === 0 ? "on" : ""}
              onClick={() => {}}
            ></li>
          );
        })}
    </ul>
  );
}
