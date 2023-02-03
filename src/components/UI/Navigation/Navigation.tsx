import React from "react";
import NavigationItem from "./NavigationItem";

const Navigation = () => {
  return (
    <nav className="container w-fit">
      <ul className="gap-1 flex w-fit flex-nowrap w-1/2">
        <NavigationItem href="/" label="HOME" />
        <NavigationItem href="/list" label="TASKS" />
      </ul>
    </nav>
  );
};

export default Navigation;
