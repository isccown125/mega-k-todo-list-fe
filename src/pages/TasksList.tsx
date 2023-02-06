import React, { useContext, useEffect } from "react";
import Tasks from "../components/List/Tasks";
import Calendar from "../components/Calendar/Calendar";
import Banner from "../components/UI/Banner/Banner";

const TasksList = () => {
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
