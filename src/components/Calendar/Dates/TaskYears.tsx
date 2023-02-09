import React, {
  ChangeEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import TaskListContext from "../../../context/TaskList/TaskList.context";
import { getAllYearsFromArr } from "../../../utils";
import uuid from "react-uuid";
import styles from "./TaskYears.module.css";

const TaskYears = ({
  onChange,
  currentYear,
}: {
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  currentYear: string;
}) => {
  const { taskList } = useContext(TaskListContext);

  const [years, setYears] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const filteredYears = getAllYearsFromArr(taskList.taskList);
      if (filteredYears) {
        setYears([...filteredYears]);
      }
    }, 1);
    return () => {};
  }, [taskList.taskList, currentYear]);

  return (
    <select className={styles.select} onChange={onChange} value={currentYear}>
      {years.map((el) => {
        if (el === currentYear) {
          return (
            <option key={uuid()} value={currentYear}>
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

export default TaskYears;
