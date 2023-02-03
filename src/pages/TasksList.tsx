import React from "react";
import Tasks from "../components/List/Tasks";
import AddTask from "../components/AddTask/AddTask";
import { ModalProvider } from "../context/Modal/Modal.context";
import TaskListProvider from "../context/TaskList/TaskList.provider";

const TasksList = () => {
  return (
    <>
      <TaskListProvider>
        <ModalProvider>
          <Tasks />
          <AddTask />
        </ModalProvider>
      </TaskListProvider>
    </>
  );
};

export default TasksList;
