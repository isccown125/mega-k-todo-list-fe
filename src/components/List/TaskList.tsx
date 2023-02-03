import React, { useContext } from "react";
import TaskListItem from "./TaskListItem";
import ModalContext from "../../context/Modal/Modal.context";
import TaskListContext from "../../context/TaskList/TaskList.context";

const TaskList = () => {
  const { onOpen } = useContext(ModalContext);
  const { data } = useContext(TaskListContext);
  return (
    <div className="w-5/6 h-4/5 flex bg-blue-500 rounded pb-4 border-2 border-blue-900 relative -top-5 overflow-y-auto flex-col">
      <div className="content flex flex-col w-full h-max gap-1 px-2 pb-2">
        <button
          onClick={onOpen}
          className="hover:opacity-50 mt-2 top-0 sticky p-3 task-list-item font-bold border-2 w-full flex bg-amber-200 border-amber-900 justify-between items-center"
        >
          Add task....
        </button>
        <p className="text-violet-900 font-black w-full text-center border-b-2 border-violet-900">
          ToDo
        </p>
        {data.map((el) => (
          <TaskListItem key={el.id} data={el} />
        ))}
        <p className="text-violet-900 font-black w-full text-center border-b-2 border-violet-900">
          Done
        </p>
      </div>
    </div>
  );
};

export default TaskList;
