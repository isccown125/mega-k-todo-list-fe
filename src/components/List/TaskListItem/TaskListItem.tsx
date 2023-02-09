import React, { useContext, useState } from "react";
import TaskListItemDate from "./TaskListItemDate";
import TaskTitle from "./TaskTitle";
import styles from "./TaskListItem.module.css";

import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { BsTrashFill } from "react-icons/bs";

import { task } from "../../../types";
import TaskListContext from "../../../context/TaskList/TaskList.context";
import Card from "../../UI/Card/Card";
import {
  deleteTask,
  modifyTask,
} from "../../../context/TaskList/TaskList.Actions";

const TaskListItem = ({ data }: { data: task }) => {
  const [taskIsDone, setTaskIsDone] = useState(data.isDone);
  const { distpatch } = useContext(TaskListContext);

  const { id, dateAdd, title, dateModify } = data;
  const checkboxButtonHandler = async () => {
    setTaskIsDone(data.isDone);
    await modifyTask({
      id: id,
      isDone: !taskIsDone,
      title: title,
      dateAdd: dateAdd,
    });
    distpatch({
      type: "UPDATE_TASK",
      task: { id: id, isDone: taskIsDone, title: title },
    });
  };

  const deleteTaskHandler = async () => {
    await deleteTask({ ...data });
    distpatch({
      type: "DELETE_TASK",
      task: { id: id },
    });
  };

  const buttonIcon = taskIsDone ? (
    <ImCheckboxChecked />
  ) : (
    <ImCheckboxUnchecked />
  );

  return (
    <Card>
      <TaskTitle taskData={data} />
      <div className="">
        <TaskListItemDate
          dateAdd={new Date(dateAdd)}
          dateComplete={dateModify ? new Date(dateModify) : undefined}
          isComplete={taskIsDone}
        ></TaskListItemDate>
        <div className={styles.action}>
          <button
            onClick={checkboxButtonHandler}
            className={`${styles.actionBtn} ${styles.checkBox}`}
          >
            {buttonIcon}
          </button>
          <button
            onClick={deleteTaskHandler}
            className={`${styles.actionBtn} ${styles.trashIcon}`}
          >
            <BsTrashFill />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TaskListItem;
