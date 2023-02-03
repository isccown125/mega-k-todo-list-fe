import React, { ChangeEvent, createContext, useReducer, useState } from "react";
import { titleReducer } from "./Modal.reducer";

const ModalContext = createContext({
  isVisible: false,
  taskTitle: "",
  titleHandleChange: (event: ChangeEvent<HTMLInputElement>) => {},
  onClose: () => {},
  onOpen: () => {},
  onAddTask: () => {
    return { value: "", isValid: false };
  },
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [title, dispatchTitle] = useReducer(titleReducer, {
    value: "",
    isValid: false,
  });

  const { value, isValid } = title;

  const setTitle = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchTitle({
      type: "INPUT_TITLE",
      isValid: true,
      value: event.target.value,
    });
  };

  const handleAddTask = () => {
    if (!isValid) {
      throw new Error("Title is not valid!");
    }
    setIsVisible(false);
    dispatchTitle({ type: "CLEAR", value: "", isValid: false });
    return { value, isValid };
  };

  const closeHandler = () => {
    setIsVisible(false);
  };
  const openHandler = () => {
    setIsVisible(true);
  };

  return (
    <ModalContext.Provider
      value={{
        isVisible: isVisible,
        taskTitle: title.value,
        titleHandleChange: setTitle,
        onOpen: openHandler,
        onClose: closeHandler,
        onAddTask: handleAddTask,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
