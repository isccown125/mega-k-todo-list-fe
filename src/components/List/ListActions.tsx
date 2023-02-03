import React from "react";
import TaskCategoryButton from "../UI/Buttons/TaskCategoryButton";

const ListActions = () => {
  return (
    <div className="flex text-white w-5/6 gap-2 m-3">
      <TaskCategoryButton>all</TaskCategoryButton>
      <TaskCategoryButton>done</TaskCategoryButton>
      <TaskCategoryButton>not done</TaskCategoryButton>
    </div>
  );
};

export default ListActions;
