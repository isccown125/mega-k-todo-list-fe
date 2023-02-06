import React, { useContext, useEffect, useReducer } from "react";
import DoneContainer from "./TaskContainers/DoneContainer";
import ToDoContainer from "./TaskContainers/ToDoContainer";
import styles from "./TaskList.module.css";
import { loadTasks } from "../../../context/TaskList/TaskList.Actions";
import TaskListContext from "../../../context/TaskList/TaskList.context";

const filterReducer = (
  state: { toDoIsVisible: boolean; doneIsVisible: boolean },
  action: "FILTER_COMPLETE" | "FILTER_PENDING" | "FILTER_ALL"
) => {
  if (action === "FILTER_ALL") {
    return { toDoIsVisible: true, doneIsVisible: true };
  }
  if (action === "FILTER_COMPLETE") {
    return { toDoIsVisible: false, doneIsVisible: true };
  }
  if (action === "FILTER_PENDING") {
    return { toDoIsVisible: true, doneIsVisible: false };
  }
  return {
    toDoIsVisible: state.toDoIsVisible,
    doneIsVisible: state.doneIsVisible,
  };
};

const TaskList = ({
  currentFilter,
}: {
  currentFilter: "FILTER_COMPLETE" | "FILTER_PENDING" | "FILTER_ALL";
}) => {
  const [filter, dispatchFilter] = useReducer(filterReducer, {
    toDoIsVisible: true,
    doneIsVisible: true,
  });
  const { distpatch, taskList } = useContext(TaskListContext);
  useEffect(() => {
    (async () => {
      distpatch({ type: "LOAD_TASK_LIST" });
      const tasks = await loadTasks();
      distpatch({ type: "UPDATE_CURRENT_LIST", taskList: [...tasks] });
    })();
    return () => {};
  }, [distpatch, taskList.task]);

  useEffect(() => {
    dispatchFilter(currentFilter);
    return () => {};
  }, [currentFilter]);

  return (
    <>
      <div className={styles.style}>
        <div className={styles.content}>
          {filter.toDoIsVisible && <ToDoContainer />}
          {filter.doneIsVisible && <DoneContainer />}
        </div>
      </div>
    </>
  );
};

export default TaskList;
