import { createContext } from "react";
import { task } from "../../types";
import uuid from "react-uuid";

const TaskListContext = createContext({
  isSaved: false,
  data: [] as task[],
  saveList: () => {},
  saveTask: ({}: task) => {},
  createTask: (title: string): task => {
    return { id: uuid(), title: title, isDone: false, dateAdd: new Date() };
  },
  modifyTask: ({}: task) => {},
});

export default TaskListContext;
