import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import TaskListProvider from "./context/TaskList/TaskList.provider";
import { ModalProvider } from "./context/Modal/Modal.context";
import BreakpointsProvider from "./context/Breakpoints/Breakpoints.provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BreakpointsProvider>
      <TaskListProvider>
        <ModalProvider>
          <BrowserRouter>
            <Layout>
              <App />
            </Layout>
          </BrowserRouter>
        </ModalProvider>
      </TaskListProvider>
    </BreakpointsProvider>
  </React.StrictMode>
);
