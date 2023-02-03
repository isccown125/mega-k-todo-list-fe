import React, { useContext } from "react";
import TaskList from "./TaskList";
import ListActions from "./ListActions";
import ModalAddTask from "../AddTask/ModalAddTask";
import ModalContext from "../../context/Modal/Modal.context";

const Tasks = () => {
  const { isVisible } = useContext(ModalContext);
  return (
    <section
      id="task-list"
      className="w-full h-full bg-blue-300 flex items-center relative flex-col"
    >
      <TaskList />
      <ListActions />
      {isVisible && <ModalAddTask />}
    </section>
  );
};

export default Tasks;
