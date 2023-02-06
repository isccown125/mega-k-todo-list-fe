import { TaskListActions, TaskState } from "../../types";

export const taskListReducer = (
  state: TaskState,
  action: TaskListActions
): TaskState => {
  if (action.type === "CREATE_TASK") {
    return {
      isLoading: state.isLoading,
      task: { title: action.task.title },
      taskList: state.taskList,
    };
  }
  if (action.type === "LOAD_TASK_LIST") {
    return { isLoading: true, taskList: state.taskList, task: state.task };
  }
  if (action.type === "UPDATE_CURRENT_LIST") {
    return {
      isLoading: true,
      taskList: [...action.taskList],
      task: state.task,
    };
  }
  if (action.type === "CLEAR_LOADING") {
    return { task: state.task, isLoading: false, taskList: state.taskList };
  }
  if (action.type === "DELETE_TASK") {
    return {
      isLoading: state.isLoading,
      taskList: state.taskList,
      task: { id: action.task.id },
    };
  }
  if (action.type === "UPDATE_TASK") {
    return {
      isLoading: state.isLoading,
      taskList: state.taskList,
      task: {
        id: action.task.id,
        title: action.task.title,
        isDone: action.task.isDone,
      },
    };
  }
  return state;
};
