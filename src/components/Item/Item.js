import React from 'react';
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import styles from './Item.module.css';


const Item = props => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <span>{props.content}</span>
            </div>
            <div className={styles.actions}>
                <div className={styles.edit}>
                   <FaPen />
                </div>
                <div className={styles.delete}>
                   <FaTrash />
                </div>
            </div>
        </div>
    )
}

export default Item;