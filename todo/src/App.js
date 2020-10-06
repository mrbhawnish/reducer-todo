import React, { useReducer } from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { initialState, todoReducer } from "./reducer/index";
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className="App">
      <h1>TodoList</h1>
      <TodoForm state={state} dispatch={dispatch} />
      <TodoList todoList={state}  dispatch={dispatch}/>
    </div>
  );
}

export default App;
