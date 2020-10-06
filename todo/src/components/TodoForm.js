import React, { useState } from "react";


const TodoForm = (props) => {
  const [todo, setTodo] = useState([]);


  const handleChange = (e) => {
      e.persist();
      setTodo(e.target.value)
  };

  const handleSubmit = (e) => {
    
  e.preventDefault();
  };

  return (
   <div>
   <form onSubmit={handleSubmit}>
   <div>
   <input 
   type="text" 
   value={todo} 
   onChange={handleChange} />
   </div>
   <button onClick={() =>   props.dispatch({type: "ADD_TODO", payload: todo})}>Add Todo</button>
   </form>
   </div>

  );
};

export default TodoForm;
