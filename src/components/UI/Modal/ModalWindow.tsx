import React from "react";
import { createPortal } from "react-dom";
import { htmlRoots } from "../../../enums";

const ModalWindow = ({ children }: { children: React.ReactNode }) => {
  return createPortal(
    <div className="flex bg-transparent z-40 h-4/5 w-4/5 z-50 fixed m-auto top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
      {children}
    </div>,
    document.getElementById(htmlRoots.modal)!
  );
};

export default ModalWindow;
