import React, { useContext, useState } from "react";
import TaskList from "./TaskList/TaskList";
import ListActions from "./ListFilter/ListActions";
import ModalAddTask from "../AddTask/ModalAddTask";
import ModalContext from "../../context/Modal/Modal.context";
import styles from "./Tasks.module.css";
import AddTaskButton from "../UI/Buttons/AddTaskButton";
import { BreakpointsContext } from "../../context/Breakpoints/Breakpoints.context";

const Tasks = () => {
  const { isVisible } = useContext(ModalContext);
  const [currentFilter, setCurrentFilter] = useState<
    "FILTER_COMPLETE" | "FILTER_PENDING" | "FILTER_ALL"
  >("FILTER_ALL");
  const { breakpointsState } = useContext(BreakpointsContext);
  const handleFilter = (
    filter: "FILTER_COMPLETE" | "FILTER_PENDING" | "FILTER_ALL"
  ) => {
    setCurrentFilter(filter);
  };

  const { onOpen } = useContext(ModalContext);

  return (
    <section id="task-list" className={styles.style}>
      <TaskList currentFilter={currentFilter} />
      {(breakpointsState.type === "LARGE_DESKTOP_DEVICE" ||
        breakpointsState.type === "DESKTOP_DEVICE") && (
        <ListActions filter={handleFilter} />
      )}
      {isVisible && <ModalAddTask />}
      <AddTaskButton onClick={onOpen} />
    </section>
  );
};

export default Tasks;
