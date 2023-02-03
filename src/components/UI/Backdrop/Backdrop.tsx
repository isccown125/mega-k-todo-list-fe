import React from "react";
import { createPortal } from "react-dom";
import "./Backdrop.css";
import { htmlRoots } from "../../../enums";

const Backdrop = () => {
  return createPortal(
    <div className="backdrop fixed w-full, h-full block bg-black z-40 top-0"></div>,
    document.getElementById(htmlRoots.backdrop)!
  );
};

export default Backdrop;
