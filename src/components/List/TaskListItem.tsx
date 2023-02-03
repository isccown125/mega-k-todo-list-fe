import React, { useContext, useState } from "react";
import TaskListItemDate from "./TaskListItemDate";

import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { task } from "../../types";
import TaskListContext from "../../context/TaskList/TaskList.context";

const TaskListItem = ({ data }: { data: task }) => {
  const [taskIsDone, setTaskIsDone] = useState(data.isDone);
  const { modifyTask, isSaved } = useContext(TaskListContext);

  const { id, isDone, dateAdd, title } = data;

  const checkboxButtonHandler = () => {
    console.log(isSaved);
    if (isSaved) {
      setTaskIsDone(!isDone);
      modifyTask({
        id,
        isDone: taskIsDone,
        dateAdd,
        dateModify: new Date(),
        title,
      });
    }
  };

  const buttonIcon = taskIsDone ? (
    <ImCheckboxChecked />
  ) : (
    <ImCheckboxUnchecked />
  );

  return (
    <div className="p-3 task-list-item font-bold border-2 w-full flex bg-amber-200 border-amber-900 justify-between items-center">
      <div className="hover:underline underline-offset-4">{title}</div>

      <button onClick={checkboxButtonHandler}>{buttonIcon}</button>
      <TaskListItemDate date={new Date(dateAdd)}></TaskListItemDate>
    </div>
  );
};

export default TaskListItem;
