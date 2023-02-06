import React from "react";
import styles from "./CalendarItems.module.css";

const CalendarItems = ({
  title,
  time,
  isDone,
}: {
  title: string;
  time: string;
  isDone: boolean;
}) => {
  return (
    <div className={styles.style}>
      <div className={styles.time}>
        <span>{time}</span>
      </div>
      <div
        className={styles.spacer}
        style={{ background: isDone ? "#ff5761" : "" }}
      ></div>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default CalendarItems;
