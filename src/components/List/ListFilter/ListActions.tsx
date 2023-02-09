import React from "react";
import TaskCategoryButton from "../../UI/Buttons/TaskCategoryButton";
import styles from "./ListActions.module.css";

const ListActions = ({
  filter,
}: {
  filter: (filter: "FILTER_COMPLETE" | "FILTER_PENDING" | "FILTER_ALL") => void;
}) => {
  const handleClickAll = () => {
    filter("FILTER_ALL");
  };
  const handleClickComplete = () => {
    filter("FILTER_COMPLETE");
  };
  const handleClickPending = () => {
    filter("FILTER_PENDING");
  };

  return (
    <div className={styles.style}>
      <TaskCategoryButton onClick={handleClickAll}>All</TaskCategoryButton>
      <TaskCategoryButton onClick={handleClickPending}>
        Pending
      </TaskCategoryButton>
      <TaskCategoryButton onClick={handleClickComplete}>
        Complete
      </TaskCategoryButton>
    </div>
  );
};

export default ListActions;
