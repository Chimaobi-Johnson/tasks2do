import React from "react";
import { FaPlus, FaCheck } from 'react-icons/fa';

import styles from './Input.module.css'

const Input = props => {

    const {
        currentText,
        handleKeyPress,
        changeTextHandler,
        updateItem,
        editing
    } = props

    return (
        <div className={styles.wrapper}>
            <input type="text" value={currentText} onKeyPress={handleKeyPress} onChange={(event) => changeTextHandler(event)} placeholder="add an item" />
            <button className={styles.inputBtn} onClick={() => updateItem()}>{editing ? <FaCheck /> : <FaPlus />}</button>
        </div>
    )
}

export default Input
