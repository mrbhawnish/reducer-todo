import React, { useState } from 'react';

 const TodoForm = (props) => {
    const [initialValue, setInitialValue] = useState(" ")

    const handleChanges = (e) => {
        setInitialValue(e.target.value)
    }

    const submitHandler = (e) => {
         e.prevenDefault();
        props.dispatch({ type: props.ADD_TODO, payload: { initialValue }})
    
    }

    return(
        <div>
            <h1>TodoList</h1>
            <form onSubmit={submitHandler}>
              <input
              type="text"
              value={initialValue}
              onChange={handleChanges}
             >
                
             </input>
              <button
             onClick= {submitHandler}>
             Add todo</button>
            </form>
        </div>
    );

 }


export default TodoForm;