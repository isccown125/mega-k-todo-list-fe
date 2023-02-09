import React, { useContext } from "react";
import TaskListItem from "../../TaskListItem/TaskListItem";
import TaskListContext from "../../../../context/TaskList/TaskList.context";
import styles from "./TaskContainers.module.css";
import TaskContainerWrapper from "../../../Wrappers/TaskContainerWrapper";
import { task } from "../../../../types";

const ToDoContainer = () => {
  const { taskList } = useContext(TaskListContext);

  return (
    <div className={styles.content}>
      <p className={styles.category}>Pending</p>
      <TaskContainerWrapper>
        {taskList.taskList.map((el: task) => {
          if (!el.isDone) {
            return <TaskListItem key={el.id} data={el} />;
          }
          return undefined;
        })}
      </TaskContainerWrapper>
    </div>
  );
};

export default ToDoContainer;
