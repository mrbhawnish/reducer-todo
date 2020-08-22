

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";



export const initialState = [{ 
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]

export const todoReducer = (state, action)  => {
    switch(action.type) {
       case ADD_TODO:
         return [...state, 
          { item: action.payload, 
            completed: false, 
            id: Date.now() }]

            
            case TOGGLE_TODO:
            console.log("Toggle", action.payload);
            return state.map((item)=>{
                if(item.id === action.payload){
                    console.log("success");
                } })
      default:
        return state;
    }

}