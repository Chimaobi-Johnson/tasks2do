import {
    ADD_TODO_ITEM,
    FETCHED_DATA_SUCCESSFULLY,
    SET_EDIT_MODE,
    UPDATE_TODO_ITEM,
    DELETE_TODO_ITEM
} from './action-types';
import {db} from '../../firebase-config';

export const addTodoItem = (item) => (dispatch) => {
    dispatch({type: ADD_TODO_ITEM, payload: item})
}

export const fetchData = (item) => (dispatch) => {
    dispatch({type: FETCHED_DATA_SUCCESSFULLY, payload: item})
}

export const setEditMode = (data, index) => async (dispatch) => {
    dispatch({
        type: SET_EDIT_MODE,
        payload: {
            data: data,
            index: index
        }
    })
}

export const updateTodoItem = (data, index) => async (dispatch) => {
    dispatch({
        type: UPDATE_TODO_ITEM,
        payload: {
            data: data,
            index: index
        }
    })
}

export const deleteTodoItem = (index) => async (dispatch) => {
    dispatch({type: DELETE_TODO_ITEM, payload: index})
}
