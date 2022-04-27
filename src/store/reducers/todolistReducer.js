import { ADD_TODO_ITEM } from "../actions/action-types";
  
  const initialState = [];

  export const addTodoItem = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO_ITEM:
        const newArray = [...state];
        newArray.push(action.payload);
        return newArray;
      default:
        return state;
    }
  };
  
  export default addTodoItem;