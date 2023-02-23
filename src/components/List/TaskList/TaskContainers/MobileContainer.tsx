import React, { useContext } from "react";
import styles from "./TaskContainers.module.css";
import TaskContainerWrapper from "../../../Wrappers/TaskContainerWrapper";
import { task } from "../../../../types";
import TaskListItem from "../../TaskListItem/TaskListItem";
import TaskListContext from "../../../../context/TaskList/TaskList.context";

const MobileContainer = () => {
  const { taskList } = useContext(TaskListContext);

  return (
    <div className={styles.content}>
      <p className={styles.category}>All Tasks</p>
      <TaskContainerWrapper>
        {taskList.taskList.map((el: task) => {
          if (!el.isDone) {
            return <TaskListItem key={el.id} data={el} />;
          }
          return undefined;
        })}
        {taskList.taskList.map((el: task) => {
          if (el.isDone) {
            return <TaskListItem key={el.id} data={el} />;
          }
          return undefined;
        })}
      </TaskContainerWrapper>
    </div>
  );
};

export default MobileContainer;
