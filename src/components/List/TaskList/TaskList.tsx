import React, { useContext, useEffect, useReducer } from "react";
import DoneContainer from "./TaskContainers/DoneContainer";
import ToDoContainer from "./TaskContainers/ToDoContainer";
import styles from "./TaskList.module.css";
import { loadTasks } from "../../../context/TaskList/TaskList.Actions";
import TaskListContext from "../../../context/TaskList/TaskList.context";
import MobileContainer from "./TaskContainers/MobileContainer";
import { BreakpointsContext } from "../../../context/Breakpoints/Breakpoints.context";
import TabletContainer from "./TaskContainers/TabletContainer";

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
  const { breakpointsState } = useContext(BreakpointsContext);

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
          {breakpointsState.type === "MOBILE_DEVICE" && <MobileContainer />}
          {breakpointsState.type === "TABLET_DEVICE" && <TabletContainer />}
          {(breakpointsState.type === "DESKTOP_DEVICE" ||
            breakpointsState.type === "LARGE_DESKTOP_DEVICE") &&
            filter.toDoIsVisible && <ToDoContainer />}
          {(breakpointsState.type === "DESKTOP_DEVICE" ||
            breakpointsState.type === "LARGE_DESKTOP_DEVICE") &&
            filter.doneIsVisible && <DoneContainer />}
        </div>
      </div>
    </>
  );
};

export default TaskList;
