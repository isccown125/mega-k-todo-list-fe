import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TasksList from "./pages/TasksList";

function App() {
  console.log(process.env["API_URI"]);
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/list" element={<TasksList />}></Route>
    </Routes>
  );
}

export default App;
