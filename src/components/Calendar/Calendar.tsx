import React, { ChangeEvent, useContext, useReducer } from "react";
import styles from "./Calendar.module.css";
import TaskYears from "./Dates/TaskYears";
import TaskDates from "./Dates/TaskDates";
import { getAllDatesFromArr, getFullDate, getFullTime } from "../../utils";
import TaskListContext from "../../context/TaskList/TaskList.context";
import uuid from "react-uuid";
import CalendarItems from "./CalendarItems";
import { task } from "../../types";
import modalContext from "../../context/Modal/Modal.context";

const currentTaskListReducer = (
  state: { yearFilter: string; dateFilter: string },
  action: {
    type: "YEAR_FILTER" | "DATE_FILTER";
    yearFilter: string;
    dateFilter: string;
  }
) => {
  if (action.type === "DATE_FILTER") {
    return { yearFilter: action.yearFilter, dateFilter: action.dateFilter };
  }

  if ((action.type = "YEAR_FILTER")) {
    return { yearFilter: action.yearFilter, dateFilter: action.dateFilter };
  }
  return { yearFilter: state.yearFilter, dateFilter: state.dateFilter };
};

const Calendar = () => {
  const [currentTaskList, dispatchCurrentList] = useReducer(
    currentTaskListReducer,
    {
      yearFilter: new Date().getFullYear().toString(),
      dateFilter: getFullDate(new Date()),
    }
  );
  const { onOpen } = useContext(modalContext);
  const { taskList } = useContext(TaskListContext);

  const selectYearHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const filteredData = getAllDatesFromArr(taskList.taskList, {
      byYear: event.target.value,
    });
    if (filteredData) {
      return dispatchCurrentList({
        type: "YEAR_FILTER",
        yearFilter: event.target.value,
        dateFilter: filteredData[filteredData.length - 1],
      });
    }
    dispatchCurrentList({
      type: "YEAR_FILTER",
      yearFilter: event.target.value,
      dateFilter: currentTaskList.dateFilter,
    });
  };
  const selectDateHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatchCurrentList({
      type: "DATE_FILTER",
      yearFilter: currentTaskList.yearFilter,
      dateFilter: event.target.value,
    });
  };

  return (
    <div className={styles.style}>
      <header className={styles.header}>
        <h1>Calendar</h1>
        {taskList.taskList.length > 0 && (
          <div className={styles.group}>
            <TaskYears
              onChange={selectYearHandler}
              currentYear={currentTaskList.yearFilter}
            />
            <TaskDates
              onChange={selectDateHandler}
              currentYear={currentTaskList.yearFilter}
              currentDate={currentTaskList.dateFilter}
            />
          </div>
        )}
        {taskList.taskList.length === 0 && (
          <p>
            Hey! You haven't planned your day? Go add task. <br />
            {/* eslint-disable-next-line*/}
            <a href={"#"} onClick={onOpen} className={styles.link}>
              Add task
            </a>
          </p>
        )}
      </header>
      <div>
        {taskList.taskList.map((el: task) => {
          const elDate = getFullDate(new Date(el.dateCreate));
          const elYear = new Date(el.dateCreate).getFullYear().toString();
          const time = getFullTime(new Date(el.dateCreate), {
            withSeconds: false,
          });
          if (
            elDate === currentTaskList.dateFilter &&
            elYear === currentTaskList.yearFilter
          ) {
            return (
              <CalendarItems
                key={uuid()}
                time={time}
                title={el.title}
                isDone={el.isDone}
              />
            );
          }
          return undefined;
        })}
      </div>
    </div>
  );
};

export default Calendar;
