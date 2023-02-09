import React from "react";
import Tasks from "../components/List/Tasks";
import Calendar from "../components/Calendar/Calendar";
import Banner from "../components/UI/Banner/Banner";
import useDocumentTitle from "../hooks/useDocumentTitle";

const TasksList = () => {
  useDocumentTitle("Todo list tasks");
  return (
    <>
      <div>
        <Banner />
        <Tasks />
      </div>
      <Calendar />
    </>
  );
};

export default TasksList;
