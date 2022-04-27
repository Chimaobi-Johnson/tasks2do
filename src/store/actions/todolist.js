import { UPDATE_TODO_LIST } from './action-type';



export const updateCurrentChat = (item) => (dispatch) => {
    dispatch({
        type: UPDATE_TODO_LIST,
        payload: item
    })
}

export const updateTodo = (item, id) => (dispatch) => {
   

}
