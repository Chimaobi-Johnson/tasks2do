import { ADD_TODO_ITEM, FETCHED_DATA_SUCCESSFULLY } from "../actions/action-types";
  
  const initialState = [];

  export const addTodoItem = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO_ITEM:
        const newArray = [...state];
        newArray.push(action.payload);
        return newArray;
      case FETCHED_DATA_SUCCESSFULLY:
            return action.payload.items
      default:
        return state;
    }
  };
  
  export default addTodoItem;