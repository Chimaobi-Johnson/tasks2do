import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from '../../store/actions/todolist';

import styles from './Input.module.css'

const Input = props => {

    const dispatch = useDispatch();

    const [ currentText, setCurrentText ] = useState("")
    const changeTextHandler = (e) => {
        setCurrentText(e.target.value);
    }

    const updateItem = () => {
         dispatch(addTodoItem(currentText));
    }

    return (
        <div className={styles.wrapper}>
            <input type="text" onChange={(event) => changeTextHandler(event)} placeholder="add an item" />
            <button onClick={() => updateItem()}>+</button>
        </div>
    )
}

export default Input
