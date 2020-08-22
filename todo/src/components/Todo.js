import React from "react";
import "./Todo.css"

 const todo = (props) => {

 return(
   <div className={`item${props.todoData.completed ? " purchased" : ""}`} >
       
   <h3>{props.todoData.item}</h3>
 </div>
 );
};

export default todo;