import { ADD_TODO_ITEM, FETCHED_DATA_SUCCESSFULLY, SET_CURRENT_INDEX, UPDATE_TODO_ITEM } from "../actions/action-types";
  
  const initialState = {
    items: [],
    currentIndex: null,
    action: ''
  }

  export const addTodoItem = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO_ITEM:
        const newArray = [...state.items];
        newArray.push(action.payload)
        return {
          ...state,
          items: newArray
        }
      case FETCHED_DATA_SUCCESSFULLY:
          return {
            ...state,
            items: action.payload.items
          }
      case SET_CURRENT_INDEX:
        console.log(action.payload.data)
        return {
          ...state,
          action: action.payload.data === 'edit' ? 'editing' : '',
          currentIndex: action.payload.index
        }
      case UPDATE_TODO_ITEM:
        const itemsArr = [...state.items];
        itemsArr[action.index] = action.payload
        return {
          ...state,
          items: itemsArr
        }
      default:
        return state;
    }
  };
  
  export default addTodoItem;