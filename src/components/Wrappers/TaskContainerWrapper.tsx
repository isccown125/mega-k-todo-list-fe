import React from "react";
import styles from "./TaskContainerWrapper.module.css";

const TaskContainerWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.items}>{children}</div>;
};

export default TaskContainerWrapper;
