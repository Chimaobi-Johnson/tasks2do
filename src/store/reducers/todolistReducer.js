import { UPDATE_TODO_LIST } from "../actions/action-types";
  
  const initialState = {
      items: []
  }
  
  export const updateTodoList = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_TODO_LIST:
        return action.payload
      default:
        return state;
    }
  };
  
  export default updateTodoList;