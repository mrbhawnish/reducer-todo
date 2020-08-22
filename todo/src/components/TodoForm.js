import React, { useState, useReducer } from 'react';
import { 
     todoReducer,
     initialState,
     ADD_TODO,
     TOGGLE_TODO
} from '../reducers/todoReducer';

 const TodoForm = () => {
    const [initialValue, setInitialValue] = useState({item: " "})
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleChanges = (e) => {
        setInitialValue({item: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        
    }

    return(
        <div>
            <h1>TodoList</h1>
            {state.item} 
            <form onSubmit={submitHandler}>
              <input
             type="text"
              value={initialValue}
              onChange={handleChanges}
             >
                
             </input>
              <button
             onClick= { dispatch({ type: ADD_TODO, payload: {initialValue}})}>
            Add todo</button>
            </form>
        </div>
    );

 }


export default TodoForm;