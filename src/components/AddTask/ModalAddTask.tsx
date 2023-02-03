import React, { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import Backdrop from "../UI/Backdrop/Backdrop";
import ModalContext from "../../context/Modal/Modal.context";
import TaskListContext from "../../context/TaskList/TaskList.context";

const ModalAddTask = () => {
  const { titleHandleChange, onClose, taskTitle, onAddTask } =
    useContext(ModalContext);
  const { saveTask, createTask } = useContext(TaskListContext);
  const task = createTask("cos");
  console.log(task);
  const onClickSaveHandler = () => {
    const title = onAddTask().value;
    if (!title) {
      throw new Error("Podaj tytuł!");
    }
    const task = createTask(title);
    saveTask(task);
  };

  return (
    <Modal label="Add item">
      <div className="custom-content flex w-full h-full">
        <div className="group w-4/6 flex flex-col justify-evenly">
          <p>Title</p>
          <input
            type="text"
            className="w-2/4 h-4 border-2 border-gray-300 h-6"
            onChange={titleHandleChange}
            value={taskTitle}
          />
        </div>

        <div className="actions w-2/6 flex items-end justify-end relative bottom-0 gap-2">
          <button
            className="rounded bg-blue-300 p-2 text-white"
            onClick={onClickSaveHandler}
          >
            add
          </button>
          <button
            onClick={onClose}
            className="rounded bg-blue-300 p-2 text-white"
          >
            close
          </button>
        </div>
        <Backdrop />
      </div>
    </Modal>
  );
};

export default ModalAddTask;
