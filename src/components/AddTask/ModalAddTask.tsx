import React, { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import Backdrop from "../UI/Backdrop/Backdrop";
import ModalContext from "../../context/Modal/Modal.context";
import TaskListContext from "../../context/TaskList/TaskList.context";
import styles from "./ModalAddTask.module.css";
import { createTask } from "../../context/TaskList/TaskList.Actions";

const ModalAddTask = () => {
  const { titleHandleChange, onClose, taskTitle, onAddTask } =
    useContext(ModalContext);
  const { distpatch } = useContext(TaskListContext);

  const onClickSaveHandler = async () => {
    const title = onAddTask().value;
    if (!title) {
      throw new Error("Podaj tytuł!");
    }
    await createTask(title);
    distpatch({
      type: "CREATE_TASK",
      task: { title: title },
    });
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
