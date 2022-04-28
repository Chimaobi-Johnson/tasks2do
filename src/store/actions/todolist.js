import { ADD_TODO_ITEM, SAVE_DATA } from './action-types';
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

const itemsList = collection(db, 'items');
console.log(itemsList);

export const addTodoItem = (item) => (dispatch) => {
    dispatch({
        type: ADD_TODO_ITEM,
        payload: item
    })
}

export const saveDataHandler = (data) => async (dispatch) => {
    await addDoc(itemsList, {items: data})
    dispatch({
        type: SAVE_DATA,
        payload: data
    })
}


