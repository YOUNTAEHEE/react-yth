import { useDispatch, useSelector } from "react-redux";
import "./Modal.scss";
import { IoMdClose } from "react-icons/io";
import * as types from "../../../redux/actionType";
export default function Modal({ children }) {
  const dispatch = useDispatch();
  const Open = useSelector((store) => store.modalReducer.modal);
  return (
    <>
      {Open && (
        <aside className="Modal">
          <div className="con">{children}</div>
          <div
            className="close"
            onClick={() =>
              dispatch({ type: types.MODAL.start, payload: false })
            }
          >
            <IoMdClose />
          </div>
        </aside>
      )}
    </>
  );
}
