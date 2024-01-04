import "./CookieModal.scss";
import { useRef, useState } from "react";
import { useCookie } from "../../../hooks/useCookie";
import { IoMdClose } from "react-icons/io";
export default function CookieModal({ wid, ht, children }) {
  const { isCookie, setCookie } = useCookie();
  const checkEl = useRef(null);
  const [Close, setClose] = useState(isCookie("today=done"));

  const handleClose = () => {
    const isChecked = checkEl.current.checked;

    if (isChecked) setCookie("today", "done", 60 * 60 * 24);
    setClose(true);
  };

  return (
    <>
      {!Close && (
        <aside
          className="CookieModal"
          style={{
            width: wid,
            heigth: ht,
            marginLeft: -wid / 2,
            marginTop: -ht / 2,
          }}
        >
          <div className="content">{children}</div>
          <div className="controls">
            <nav>
              <input ref={checkEl} type="checkbox" />
              <span> 오늘 하루 팝업보지 않기</span>
            </nav>
            <span onClick={handleClose}><IoMdClose /></span>
          </div>
        </aside>
      )}
    </>
  );
}
