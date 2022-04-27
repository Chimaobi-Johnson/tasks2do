import React from "react";
import styles from './Input.module.css'

const Input = props => {

    return (
        <div className={styles.wrapper}>
            <input type="text" placeholder="add an item" />
            <button>+</button>
        </div>
    )
}

export default Input
