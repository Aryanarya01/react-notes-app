import { useState,useEffect } from "react";

import "./App.css";
import Header from "./Header";
import ConnectionStatus from "./ConnectionStatus";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [todo, setTodo] = useState([
    { task: "Code", id: uuidv4(), isDone: false },
  ]);
  const [error, setError] = useState("");
  const [errType, setErrType] = useState("");

  useEffect(() => {
  if (error) {
    const timer = setTimeout(() => setError(""), 2000);
    return () => clearTimeout(timer);
  }
}, [error]);



  const addTodo = (newTodo) => {
    setTodo((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setError("Task added successfully!");
    setErrType("success");
  };
  const handelDelete = (id) => {
    try{
    setTodo((prevTodo) => prevTodo.filter((item) => item.id != id));
    setError("Task Deleted");
    setErrType("success");
    }catch(err){
      console.error(err);
    setError("Failed to delete task!");
    }
  };

  const isDone = (id) => {
    try{
      setTodo((prevTodo)=>{
        return prevTodo.map((todo)=>{
             if(todo.id == id){
               return {...todo,isDone:true,}
             }else{
             return todo;
             }
         })
      })
      setError("Task Completed");
      setErrType("success");
    }catch(err){
       console.error(err);
    setError("Failed to update task!");
    setErrType("error");
    }
  };
  
  return (
    <>
      <div className="outer" >
        <div className="background-glow">
          <Header />
          <ConnectionStatus />
          <TodoInput addTodo={addTodo} setError={setError} setErrType={setErrType} />
          <TodoList todo={todo} handelDelete={handelDelete} isDone={isDone}/>
          {error && (
  <div
    style={{
      padding: "10px",
      margin: "10px 0",
      borderRadius: "6px",
      color: "white",
      backgroundColor:
        errType === "error"
          ? "red"
          : errType === "success"
          ? "green"
          : "gray",
    }}
  >
    {error}
  </div>
)}

        </div>
      </div>
    </>
  );
}

export default App;
