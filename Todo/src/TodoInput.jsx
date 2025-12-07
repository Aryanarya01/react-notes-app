import React, { useState } from 'react'

const TodoInput = ({addTodo,setError,setErrType}) => {
    const [newTodo,setNewTodo] = useState("");


    const handelChange = (event)=>{
        setNewTodo(event.target.value);
    }

    const handelSubmit =()=>{
        if(newTodo.trim()==""){
          setError("Task description cannot be empty!");
          setErrType("error");
          return;
        }
         addTodo(newTodo);
         setNewTodo("");
          
    }

  return (
    <div>
        <input className='inputBox'  type="text" placeholder='Enter Your taks...' onChange={handelChange} value={newTodo}/>
        <button style={{color:"black", }} className='inputBtn' onClick={handelSubmit}> <i class="fas fa-plus mr-1"></i> ADD <i class="fas fa-hand-point-right ml-1"></i></button>
    </div>
  )
}

export default TodoInput