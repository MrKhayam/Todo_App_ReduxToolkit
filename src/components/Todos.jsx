import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
    const todo = useSelector((state) => state.todos);
    const dispatch = useDispatch();
  return (
    <>
      <div className="w-[70%] mt-12 h-10 mx-auto flex flex-col gap-6">
        <h1 className="text-center text-3xl font-semibold text-white">
          Your Todos
        </h1>
        <div className="todo flex flex-col gap-4">
          {todo.map((singleTodo) => (
            <div key={singleTodo.id} className="w-[60%] h-14 rounded-lg p-4 text-black flex justify-between items-center bg-white mx-auto">
              <h3>{singleTodo.text}</h3>
              <IoCloseCircleSharp onClick={()=> {dispatch(removeTodo(singleTodo.id))}} cursor="pointer" size="20" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todos;
