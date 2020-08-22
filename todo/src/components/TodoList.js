import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {

   return (
       <div>
           {props.todoData.map(item => (
               <Todo key={item.id} 
               todoData={item}></Todo>
          ))}
          <button className="clear-btn">Clear completed</button>
       </div>
   )
}

export default TodoList;