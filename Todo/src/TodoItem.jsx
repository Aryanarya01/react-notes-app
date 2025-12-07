import React from "react";

const TodoItem = ({ todo,handelDelete,isDone}) => {
  return (
    <> 
    <div className="listItems">
      <li>
        <span style={{textDecoration: todo.isDone ? "line-through" :"none"}}>{todo.task}</span>
        <span className="liBtn">
          <button title="Delete task" onClick={()=>handelDelete(todo.id)}><i class="fas fa-trash-alt"></i></button>
          <button title="Completed"  onClick={()=>isDone(todo.id)}><i class="fa-regular fa-thumbs-up"></i></button>
        </span>
      </li>
    </div>
</>
  );
};

export default TodoItem;
