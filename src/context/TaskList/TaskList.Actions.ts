import { task } from "../../types";
import { taskListConfig } from "../../config";
import uuid from "react-uuid";

export const createTask = async (title: string) => {
  if (title.length > 70 || title.length < 3) {
    throw new Error("Title should include between 3 and 70 characters");
  }
  const task: task = {
    id: uuid(),
    isDone: false,
    dateAdd: new Date(),
    title: title,
    dateModify: undefined,
  };

  const tasks = localStorage.getItem(taskListConfig.id);

  if (tasks) {
    const data = JSON.parse(tasks);
    const tasksToSave = [...data, task];
    return localStorage.setItem(taskListConfig.id, JSON.stringify(tasksToSave));
  }
  localStorage.setItem(taskListConfig.id, JSON.stringify([task]));
};

export const modifyTask = async (taskToModify: task) => {
  if (
    taskToModify.title &&
    (taskToModify.title.length > 70 || taskToModify.title.length < 3)
  ) {
    throw new Error("Title should include between 3 and 70 characters");
  }
  const tasks = localStorage.getItem(taskListConfig.id);
  if (tasks) {
    const data = JSON.parse(tasks);

    const taskIndex = data.findIndex((el: task) => el.id === taskToModify.id);
    if (taskToModify.isDone !== data[taskIndex].isDone) {
      data[taskIndex].isDone = taskToModify.isDone;
    }

    if (taskToModify.title !== data[taskIndex].title) {
      data[taskIndex].title = taskToModify.title;
    }
    data[taskIndex].dateModify = new Date();
    return localStorage.setItem(taskListConfig.id, JSON.stringify(data));
  }
};

export const deleteTask = async (task: task) => {
  const tasks = localStorage.getItem(taskListConfig.id);
  if (tasks) {
    const data = JSON.parse(tasks);
    const taskIndex = data.findIndex((el: task) => el.id === task.id);
    data.splice(taskIndex, 1);
    return localStorage.setItem(taskListConfig.id, JSON.stringify(data));
  }
};

export const loadTasks = async () => {
  const getItemsFromLocalStorage = localStorage.getItem(taskListConfig.id);
  if (!getItemsFromLocalStorage) {
    localStorage.setItem(taskListConfig.id, JSON.stringify([]));
    return [];
  }
  return JSON.parse(getItemsFromLocalStorage);
};
