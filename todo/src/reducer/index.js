

export const initialState = [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
}];


export const todoReducer = (state = initialState, action) => {
    // console.log("this is state:", state)
   switch(action.type){
   case "ADD_TODO":
       return [...state, {
        item: action.payload,
        completed: false,
        id:  Date.now()
       }]
       case "TOGGLE_TODO":
        //    console.log("toggle todo action:", action.payload)
           
         return state.map((item, i) => {
            if(action.payload === item.id){
                return {...item, completed: !item.completed}
            }
            return item
        })
            
          case "CLEAR_TODO":
            return state.filter(item => !item.completed)
   default:
       return { state }
   }
}