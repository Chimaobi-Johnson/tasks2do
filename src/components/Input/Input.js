import React from "react";
import { FaPlus } from 'react-icons/fa';

import styles from './Input.module.css'

const Input = props => {

    const {
        currentText,
        handleKeyPress,
        changeTextHandler,
        updateItem
    } = props

    return (
        <div className={styles.wrapper}>
            <input type="text" value={currentText} onKeyPress={handleKeyPress} onChange={(event) => changeTextHandler(event)} placeholder="add an item" />
            <button onClick={() => updateItem()}><FaPlus /></button>
        </div>
    )
}

export default Input
