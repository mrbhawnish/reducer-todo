import React from "react";
import "../Todo.css";

const Todo = (props) => {
 
  return (
    
    <div className={`item${props.todoItem.completed ? " completed" : ""}`}
       onClick={() => props.toggleItem(props.todoItem.id)}>
        
          <li>{props.todoItem.item}</li>

   </div>
  );
};

export default Todo;
