import React, { ChangeEvent, useContext, useState } from "react";
import TaskListContext from "../../../context/TaskList/TaskList.context";
import { task } from "../../../types";
import styles from "./ChangeTaskTitle.module.css";
import ChangeTitleButton from "../../UI/Buttons/ChangeTitleButton";

import { modifyTask } from "../../../context/TaskList/TaskList.Actions";

const ChangeTaskTitle = ({
  taskData,
  onCancelEdit,
}: {
  className?: string;
  taskData: task;
  onCancelEdit: (cancel: boolean) => void;
}) => {
  const [changeTitle, setChangeTitle] = useState(taskData.title);

  const { distpatch } = useContext(TaskListContext);

  const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setChangeTitle(event.target.value);
  };

  const handleCancelEditTitle = () => {
    onCancelEdit(false);
  };

  const saveChangedTitle = async () => {
    if (changeTitle.length > 0) {
      onCancelEdit(false);
    }
    await modifyTask({
      id: taskData.id,
      title: changeTitle,
      isDone: taskData.isDone,
      dateCreate: taskData.dateCreate,
    });
    distpatch({
      type: "UPDATE_TASK",
      task: { title: changeTitle, id: taskData.id, isDone: taskData.isDone },
    });
  };

  return (
    <>
      <div className={styles.layer}>
        <div className={styles.content}>
          <input
            type="text"
            className={`${styles.input}`}
            onChange={changeTitleHandler}
            value={changeTitle}
          />
          <div className={styles.group}>
            <ChangeTitleButton onClick={handleCancelEditTitle}>
              Cancel
            </ChangeTitleButton>
            <ChangeTitleButton onClick={saveChangedTitle}>
              Save
            </ChangeTitleButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeTaskTitle;
