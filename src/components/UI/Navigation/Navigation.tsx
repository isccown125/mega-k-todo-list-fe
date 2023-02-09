import React, { useReducer } from "react";
import NavigationItem from "./NavigationItem";
import styles from "./Navigation.module.css";
import { hrefs } from "../../../config";
import { checkPathname } from "../../../utils/check-pathname";
import { FaTasks } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

const reducerIsActive = (
  state: { homeIsActive: boolean; taskIsActive: boolean },
  action: { type: "HOME_ACTIVE" | "TASKS_ACTIVE" }
) => {
  if (action.type === "HOME_ACTIVE") {
    return { homeIsActive: true, taskIsActive: false };
  }
  if (action.type === "TASKS_ACTIVE") {
    return { homeIsActive: false, taskIsActive: true };
  }
  return { homeIsActive: state.homeIsActive, taskIsActive: state.taskIsActive };
};
const initIsActive = () => {
  return {
    homeIsActive: checkPathname(hrefs.HOME_PAGE),
    taskIsActive: checkPathname(hrefs.TASKS_PAGE),
  };
};

const Navigation = () => {
  const [isActive, dispatchIsActive] = useReducer(
    reducerIsActive,
    {
      homeIsActive: false,
      taskIsActive: false,
    },
    initIsActive
  );

  const handleClickActiveHome = () => {
    dispatchIsActive({ type: "HOME_ACTIVE" });
  };
  const handleClickActiveTasks = () => {
    dispatchIsActive({ type: "TASKS_ACTIVE" });
  };

  return (
    <nav className={styles.style}>
      <ul className={styles.container}>
        <NavigationItem
          href="/"
          label="HOME"
          isActive={isActive.homeIsActive}
          onClick={handleClickActiveHome}
        >
          <AiOutlineHome />
        </NavigationItem>
        <NavigationItem
          href="/list"
          label="TASKS"
          isActive={isActive.taskIsActive}
          onClick={handleClickActiveTasks}
        >
          <FaTasks />
        </NavigationItem>
      </ul>
    </nav>
  );
};

export default Navigation;
