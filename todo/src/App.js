import React, { useReducer }from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { 
  todoReducer,
  initialState,
  ADD_TODO,
  TOGGLE_TODO
}  from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  return (
    <div className="App">
      <TodoList dispatch={dispatch} todoData={state} />
      <TodoForm dispatch={dispatch} ADD_TODO={ADD_TODO} />
    </div>
  );
}

export default App;
