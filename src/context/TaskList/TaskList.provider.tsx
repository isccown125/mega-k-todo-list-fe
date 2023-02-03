import React, { useEffect, useReducer, useState } from "react";
import TaskListContext from "./TaskList.context";
import { taskListConfig } from "../../config";
import { task } from "../../types";
import uuid from "react-uuid";
import { isSavedReducer } from "./TaskList.reducer";

const TaskListProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTasksList, setCurrentTasksList] = useState<task[]>([]);
  const [isSaved, dispatchIsSaved] = useReducer(isSavedReducer, {
    isValid: false,
  });

  const saveList = async () => {
    const getSavedLocalList = await localStorage.getItem(taskListConfig.id);
    if (getSavedLocalList && currentTasksList.length === 0) {
      const parseList = await JSON.parse(getSavedLocalList);
      setCurrentTasksList([...parseList]);
      dispatchIsSaved({ type: "SAVED_LIST" });
    } else {
      const jsonList = JSON.stringify(currentTasksList);
      localStorage.setItem(taskListConfig.id, jsonList);
      dispatchIsSaved({ type: "SAVED_LIST" });
    }
  };
  useEffect(() => {
    setTimeout(async () => {
      if (!isSaved.isValid) {
        await saveList();
      }
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      if (!isSaved) {
        await saveList();
      }
    }, 3000);
    return () => {};
  }, [isSaved, saveList]);

  const createTask = (title: string): task => {
    const task = {
      id: uuid(),
      title: title,
      isDone: false,
      dateAdd: new Date(),
    };
    return task;
  };

  const saveTask = (taskToSave: task) => {
    setCurrentTasksList([...currentTasksList, taskToSave]);
    dispatchIsSaved({ type: "SAVE_LIST" });
  };
  const modifyTask = async (taskToModify: task) => {
    const currentListCopy = currentTasksList;
    const findTaskIndex = currentListCopy.findIndex(
      (el) => el.id === taskToModify.id
    );
    const findTask = currentListCopy[findTaskIndex];

    if (findTask.title !== taskToModify.title) {
      findTask.title = taskToModify.title;
    }
    if (findTask.isDone !== taskToModify.isDone) {
      findTask.isDone = taskToModify.isDone;
    }
    findTask.dateModify = new Date();
    setCurrentTasksList([...currentListCopy]);
    dispatchIsSaved({ type: "MODIFY_LIST" });
    await saveList();
  };

  return (
    <TaskListContext.Provider
      value={{
        data: currentTasksList,
        isSaved: isSaved.isValid,
        modifyTask: modifyTask,
        saveList: saveList,
        saveTask: saveTask,
        createTask: createTask,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListProvider;
