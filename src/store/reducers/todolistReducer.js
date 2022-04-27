import { ADD_TODO_ITEM } from "../actions/action-types";
  
  const initialState = [];

  export const addTodoItem = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO_ITEM:
        state.push(action.payload);
        return state
      default:
        return state;
    }
  };
  
  export default addTodoItem;