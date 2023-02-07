import React, { ChangeEvent, useContext, useState } from "react";
import TaskListContext from "../../../context/TaskList/TaskList.context";
import { task } from "../../../types/task.type";
import styles from "./ChangeTaskTitle.module.css";
import ChangeTitleButton from "../../UI/Buttons/ChangeTitleButton";

import { modifyTask } from "../../../context/TaskList/TaskList.Actions";

const ChangeTaskTitle = ({
  className,
  taskData,
  onCancelEdit,
}: {
  className?: string;
  taskData: task;
  onCancelEdit: (cancel: boolean) => void;
}) => {
  const [changeTitle, setChangeTitle] = useState(taskData.title);
  const [error, setError] = useState("");
  const { distpatch } = useContext(TaskListContext);

  const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setChangeTitle(event.target.value);
  };

  const handleCancelEditTitle = () => {
    onCancelEdit(false);
  };

  const saveChangedTitle = async () => {
    try {
      await modifyTask({
        id: taskData.id,
        title: changeTitle,
        isDone: taskData.isDone,
        dateAdd: taskData.dateAdd,
      });
      distpatch({
        type: "UPDATE_TASK",
        task: { title: changeTitle, id: taskData.id, isDone: taskData.isDone },
      });
      if (changeTitle.length > 0) {
        onCancelEdit(false);
      }
    } catch (error) {
      setError("Title must contain between 3 and 70 characters!");
    }
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
          {error.length > 0 && <p>{error}</p>}
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
