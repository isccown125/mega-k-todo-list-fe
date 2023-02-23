import React, { useContext, useEffect, useState } from "react";
import Tasks from "../components/List/Tasks";
import Calendar from "../components/Calendar/Calendar";
import Banner from "../components/UI/Banner/Banner";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { BreakpointsContext } from "../context/Breakpoints/Breakpoints.context";

const TasksList = () => {
  const [isMobile, setIsMobile] = useState(false);
  useDocumentTitle("Todo list tasks");

  const { breakpointsState } = useContext(BreakpointsContext);

  useEffect(() => {
    if (
      breakpointsState.type === "MOBILE_DEVICE" ||
      breakpointsState.type === "TABLET_DEVICE"
    ) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [breakpointsState.type]);

  return (
    <>
      <div>
        <Banner />
        <Tasks />
      </div>
      {!isMobile && <Calendar />}
    </>
  );
};

export default TasksList;
