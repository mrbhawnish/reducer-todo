import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {

  const toggleItem = (id) => {
    props.dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const clearTodo = (item) => {
      
    props.dispatch({ type: "CLEAR_TODO", payload: item });

  };

  return (
    <div>
      {props.todoList.map((item, i) => (
        <Todo
           key={i}
          todoItem={item}
          dispatch={props.dispatch}
          toggleItem={toggleItem}
        />
      ))}
      <button className="clear-btn" onClick={() => clearTodo()}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
