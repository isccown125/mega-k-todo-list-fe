import React, {
  ChangeEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import TaskListContext from "../../../context/TaskList/TaskList.context";
import { getAllDatesFromArr } from "../../../utils";
import uuid from "react-uuid";
import styles from "./TaskDates.module.css";

const TaskDates = ({
  onChange,
  currentYear,
  currentDate,
}: {
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  currentYear: string;
  currentDate: string;
}) => {
  const [dates, setDates] = useState<string[]>([]);

  const { taskList } = useContext(TaskListContext);

  useEffect(() => {
    setTimeout(() => {
      const filteredDates = getAllDatesFromArr(taskList.taskList, {
        byYear: currentYear,
      });
      if (filteredDates) {
        setDates([...filteredDates]);
      }
    }, 1);
    return () => {};
  }, [taskList.taskList, currentYear, currentDate]);
  return (
    <select className={styles.select} onChange={onChange} value={currentDate}>
      {dates.map((el) => {
        if (el === currentDate) {
          return (
            <option key={uuid()} value={currentDate}>
              {el}
            </option>
          );
        } else {
          return (
            <option key={uuid()} value={el}>
              {el}
            </option>
          );
        }
      })}
    </select>
  );
};

export default TaskDates;
