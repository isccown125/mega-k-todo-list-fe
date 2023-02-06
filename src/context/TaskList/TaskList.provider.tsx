import { useReducer } from "react";
import TaskListContext, { state } from "./TaskList.context";
import { taskListReducer } from "./TaskList.reducer";

const TaskListProvider = ({ children }: { children: React.ReactNode }) => {
  const [taskList, dispatch] = useReducer(taskListReducer, state);

  return (
    <TaskListContext.Provider
      value={{
        taskList: { ...taskList },
        distpatch: dispatch,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListProvider;
