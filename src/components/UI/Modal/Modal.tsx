import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { htmlRoots } from "../../../enums";
import { AiFillCloseCircle } from "react-icons/ai";
import ModalContext from "../../../context/Modal/Modal.context";

const Modal = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label?: string;
}) => {
  const ctx = useContext(ModalContext);

  return createPortal(
    <div className="rounded flex flex-col bg-white z-40 h-1/5 w-4/5 z-50 fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
      <header className="h-1/5  flex w-full bg-blue-300">
        <div className="flex w-5/6 pl-2 h-full items-center">
          <h3>{label}</h3>
        </div>
        <div className="actions w-1/6 flex items-center justify-end pr-3">
          <button
            className="bg-transparent hover:opacity-75"
            onClick={ctx.onClose}
          >
            <AiFillCloseCircle className="text-3xl text-violet-900" />
          </button>
        </div>
      </header>
      <div className="modal-content w-full h-4/5 p-2">{children}</div>
    </div>,
    document.getElementById(htmlRoots.modal)!
  );
};
export default Modal;
