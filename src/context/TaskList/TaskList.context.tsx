import { createContext } from "react";
import { TaskState, TaskListActions } from "../../types";

export const state: TaskState = {
  isLoading: false,
  task: null,
  taskList: [],
};

const TaskListContext = createContext<{
  taskList: TaskState;
  distpatch: React.Dispatch<TaskListActions>;
}>({
  taskList: state,
  distpatch: () => null,
});

export default TaskListContext;
