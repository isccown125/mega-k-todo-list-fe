import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { htmlRoots } from "../../../enums";
import { AiFillCloseCircle } from "react-icons/ai";
import ModalContext from "../../../context/Modal/Modal.context";
import styles from "./Modal.module.css";

const Modal = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label?: string;
}) => {
  const ctx = useContext(ModalContext);

  return createPortal(
    <div className={styles.style}>
      <header className={styles.header}>
        <div className={styles["header-label"]}>
          <p>{label}</p>
        </div>
        <div>
          <button onClick={ctx.onClose} className={styles.closeBtn}>
            <AiFillCloseCircle />
          </button>
        </div>
      </header>
      <div className={styles.content}>{children}</div>
    </div>,
    document.getElementById(htmlRoots.modal)!
  );
};
export default Modal;
