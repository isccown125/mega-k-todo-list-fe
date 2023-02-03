import React from "react";
import { MdArrowDropDown } from "react-icons/md";

const TaskCategoryButton = ({ children }: { children?: React.ReactNode }) => {
  return (
    <button className="text-xl bg-transparent cursor-pointer flex items-center underline">
      {children}
      <MdArrowDropDown />
    </button>
  );
};

export default TaskCategoryButton;
