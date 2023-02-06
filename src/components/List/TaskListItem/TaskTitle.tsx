import React, { useState } from "react";
import ChangeTaskTitle from "./ChangeTaskTitle";
import { task } from "../../../types";
import styles from "./TaskTitle.module.css";

const TaskTitle = ({ taskData }: { taskData: task }) => {
  const [isEditing, setIsEditing] = useState(false);

  const clickTitleHandler = () => {
    setIsEditing(true);
  };

  const cancelEditTitle = (cancel: boolean) => {
    setIsEditing(cancel);
  };

  return (
    <div className={styles.titleWrapper}>
      {!isEditing && (
        <p
          title={"Change title"}
          onClick={clickTitleHandler}
          className={styles.title}
          style={{
            textDecoration: `${
              taskData.isDone ? "3px line-through #34085b" : ""
            }`,
          }}
        >
          {taskData.title}
        </p>
      )}

      {isEditing && (
        <ChangeTaskTitle taskData={taskData} onCancelEdit={cancelEditTitle} />
      )}
    </div>
  );
};

export default TaskTitle;
