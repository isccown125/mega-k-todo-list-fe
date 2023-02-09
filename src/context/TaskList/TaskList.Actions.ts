import { task } from "../../types";

export const createTask = async (title: string) => {
  if (title.length > 70 || title.length < 3) {
    throw new Error("Title should include between 3 and 70 characters");
  }
  try {
    await fetch(`${process.env.REACT_APP_API_URI}/task/`, {
      method: "PUT",
      body: JSON.stringify({ title: title }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error("Cannot create task. Please try again!");
  }
};

export const modifyTask = async (taskToModify: task) => {
  try {
    await fetch(`${process.env.REACT_APP_API_URI}/task/`, {
      method: "PATCH",
      body: JSON.stringify({
        id: taskToModify.id,
        title: taskToModify.title,
        isDone: taskToModify.isDone,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error("Cannot update task. Please try again!");
  }
};

export const deleteTask = async (task: task) => {
  try {
    await fetch(`${process.env.REACT_APP_API_URI}/task/`, {
      method: "DELETE",
      body: JSON.stringify({
        id: task.id,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error("Cannot update task. Please try again!");
  }
};

export const loadTasks = async () => {
  try {
    const result = await fetch(`${process.env.REACT_APP_API_URI}/task/`, {
      method: "GET",
    });
    const data = await result.json();
    return data;
  } catch (error) {
    throw new Error("Cannot loaded tasks from database!");
  }
};
