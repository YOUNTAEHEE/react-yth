import { useDispatch, useSelector } from "react-redux";
import "./Modal.scss";
import { IoMdClose } from "react-icons/io";
import { modalClose } from "../../../redux/modalSlice";
export default function Modal({ children }) {
  const dispatch = useDispatch();
  const Open = useSelector((store) => store.modal.open);
  return (
    <>
      {Open && (
        <aside className="Modal">
          <div className="con">{children}</div>
          <div className="close" onClick={() => dispatch(modalClose())}>
            <IoMdClose />
          </div>
        </aside>
      )}
    </>
  );
}
