import React from "react";
import styles from "./TaskCategoryButton.module.css";

const TaskCategoryButton = ({
  children,
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
}) => {
  return (
    <button onClick={onClick} className={styles.style} title="Choose category">
      {children}
    </button>
  );
};

export default TaskCategoryButton;
