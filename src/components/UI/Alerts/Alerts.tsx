import React from "react";
import styles from "./Alerts.module.css";
import { createPortal } from "react-dom";
import { htmlRoots } from "../../../enums";

const Alerts = () => {
  return createPortal(
    <div className={styles.style}>
      Title must contain between 3 and 70 characters
    </div>,
    document.getElementById(htmlRoots.modal)!
  );
};

export default Alerts;
