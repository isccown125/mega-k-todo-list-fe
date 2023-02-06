import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "./AddTaskButton.module.css";

const AddTaskButton = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={onClick} className={styles.btn} title="Add task">
      <AiOutlinePlus />
    </button>
  );
};

export default AddTaskButton;
