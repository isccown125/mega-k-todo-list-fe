import React from "react";
import styles from "./ChangeTitleButton.module.css";

const ChangeTitleButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button className={styles.style} onClick={onClick}>
      {children}
    </button>
  );
};

export default ChangeTitleButton;
