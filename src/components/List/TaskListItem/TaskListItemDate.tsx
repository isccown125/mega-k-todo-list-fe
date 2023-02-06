import React from "react";
import { getFullDate, getFullTime } from "../../../utils/date";
import styles from "./TaskListItemDate.module.css";

const TaskListItemDate = ({
  dateAdd,
  dateComplete,
  isComplete,
}: {
  dateAdd: Date;
  dateComplete?: Date;
  isComplete?: boolean;
}) => {
  const fullAddDate = getFullDate(dateAdd);
  const fullAddTime = getFullTime(dateAdd, { withSeconds: false });

  const fullCompleteDate = dateComplete
    ? getFullDate(dateComplete)
    : "YYYY-MM-DD";
  const fullCompleteTime = dateComplete
    ? getFullTime(dateComplete, { withSeconds: false })
    : "--:--:--";

  return (
    <div className={styles.style}>
      <div className={styles.group}>
        <span>Date added:</span>
        <span className={styles.time}>{`${fullAddDate} ${fullAddTime}`}</span>
      </div>
      <div className={styles.group}>
        {isComplete && <span>Date Complete:</span>}
        {isComplete && (
          <span
            className={styles.time}
          >{`${fullCompleteDate} ${fullCompleteTime}`}</span>
        )}
      </div>
    </div>
  );
};

export default TaskListItemDate;
