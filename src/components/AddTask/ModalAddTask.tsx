import React, { useContext, useState } from "react";
import Modal from "../UI/Modal/Modal";
import Backdrop from "../UI/Backdrop/Backdrop";
import ModalContext from "../../context/Modal/Modal.context";
import TaskListContext from "../../context/TaskList/TaskList.context";
import styles from "./ModalAddTask.module.css";
import { createTask } from "../../context/TaskList/TaskList.Actions";

const ModalAddTask = () => {
  const [error, setError] = useState("");
  const { titleHandleChange, onClose, taskTitle, onAddTask } =
    useContext(ModalContext);
  const { distpatch } = useContext(TaskListContext);

  const onClickSaveHandler = async () => {
    try {
      const title = onAddTask().value;
      await createTask(title);
      distpatch({
        type: "CREATE_TASK",
        task: { title: title },
      });
      onClose();
    } catch (error) {
      setError("Title must contain between 3 and 70 characters!");
    }
  };

  return (
    <Modal label="Add item">
      <div className={styles.content}>
        <div className={styles.main}>
          <p>Title</p>
          <input
            type="text"
            className={styles.input}
            onChange={titleHandleChange}
            value={taskTitle}
          />
          {error.length > 0 && (
            <p className={styles.error}>
              Title must contain between 3 and 70 characters!
            </p>
          )}
        </div>
        <div className={styles.actions}>
          <div className={styles.group}>
            <button className={styles.btn} onClick={onClickSaveHandler}>
              add
            </button>
            <button className={styles.btn} onClick={onClose}>
              close
            </button>
          </div>
        </div>
        <Backdrop />
      </div>
    </Modal>
  );
};

export default ModalAddTask;
