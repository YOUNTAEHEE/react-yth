import "./Modal.scss";
import { IoMdClose } from "react-icons/io";
import { useGlobalData } from "../../../hooks/useGlobalData";
export default function Modal({ children }) {
  const { ModalOpen, setModalOpen } = useGlobalData();
  return (
    <>
      {ModalOpen && (
        <aside className="Modal">
          <div className="con">{children}</div>
          <div className="close" onClick={() => setModalOpen(false)}>
            <IoMdClose />
          </div>
        </aside>
      )}
    </>
  );
}
