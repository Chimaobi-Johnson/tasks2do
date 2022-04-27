import { ADD_TODO_ITEM } from './action-types';



export const addTodoItem = (item) => (dispatch) => {
    dispatch({
        type: ADD_TODO_ITEM,
        payload: item
    })
}


