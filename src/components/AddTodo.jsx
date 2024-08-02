import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addTodo(input));
  };
  return (
    <>
      <div
        id="addTodo"
        className="addTodo text-white justify-center items-center w-[70%] h-auto p-7 mx-auto mt-24 flex gap-4"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-[50%] h-12 outline-none border-none rounded-full p-5 text-black"
        />
        <button
          onClick={handleClick}
          className="px-5 py-3 bg-white rounded-full text-black cursor-pointer"
        >
          Add Todo
        </button>
      </div>
    </>
  );
};

export default AddTodo;
