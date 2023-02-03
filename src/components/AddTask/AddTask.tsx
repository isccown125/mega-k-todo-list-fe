import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ModalContext from "../../context/Modal/Modal.context";

const AddTask = () => {
  const { onOpen } = useContext(ModalContext);

  return (
    <button
      title="add task"
      className="z-40 fixed rounded-3xl bg-amber-300 font-bold flex text-zinc-900 text-3xl bottom-2 right-2 p-3"
      onClick={onOpen}
    >
      <AiOutlinePlus />
    </button>
  );
};

export default AddTask;
