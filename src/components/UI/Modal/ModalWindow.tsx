import React from "react";
import { createPortal } from "react-dom";
import { htmlRoots } from "../../../enums";

const ModalWindow = ({ children }: { children: React.ReactNode }) => {
  return createPortal(
    <div>{children}</div>,
    document.getElementById(htmlRoots.modal)!
  );
};

export default ModalWindow;
