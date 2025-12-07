 

import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo,handelDelete,isDone}) => {
  return (
    <ul>
      {todo.map((item) => (
        <TodoItem key={item.id} todo={item}
        handelDelete={handelDelete} 
        isDone={isDone}
        />
      ))}
    </ul>
  );
};

export default TodoList;
