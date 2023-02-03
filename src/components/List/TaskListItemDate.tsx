import React from "react";
import { getFullDate, getFullTime } from "../../utils/date";

const TaskListItemDate = ({ date }: { date: Date }) => {
  const fullDate = getFullDate(date);
  const fullTime = getFullTime(date, { withSeconds: true });

  return (
    <div>
      <p>Task added:</p>
      <span className="text-gray-400 text-xs">{`at ${fullDate} ${fullTime}`}</span>
    </div>
  );
};

export default TaskListItemDate;
