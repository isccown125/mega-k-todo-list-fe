import { task, taskCreate, taskDelete, taskModify } from "./task.type";

export interface TaskState {
  taskList: task[];
  task: task | taskCreate | taskDelete | taskModify | null;
  isLoading: boolean | null;
}

export type TaskListActions =
  | { type: "CREATE_TASK"; task: taskCreate }
  | {
      type: "UPDATE_TASK";
      task: taskModify;
    }
  | { type: "DELETE_TASK"; task: taskDelete }
  | { type: "LOAD_TASK_LIST" }
  | { type: "CLEAR_LOADING" }
  | {
      type: "UPDATE_CURRENT_LIST";
      taskList: task[];
    };
