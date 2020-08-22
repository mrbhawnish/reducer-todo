import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {

    const toggleItem = (id) => {       
        props.dispatch({ type: "TOGGLE_TODO", payload: id })
    } 
    const clearTodo = (item) => {
        props.dispatch({ type: "CLEAR_TODO", payload: item})
    }
   return (
       <div>
           {props.todoData.map(item => (
               <Todo 
               todoData={item} dispatch={props.dispatch} toggleItem={toggleItem}></Todo>
          ))}
          <button className="clear-btn" onClick={() => clearTodo()}>Clear completed</button>
       </div>
   )
}

export default TodoList;