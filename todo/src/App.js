import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { initialState } from './reducers/todoReducer';

function App() {

  return (
    <div className="App">
      <TodoList todoData={initialState} />
      <TodoForm  />
    </div>
  );
}

export default App;
