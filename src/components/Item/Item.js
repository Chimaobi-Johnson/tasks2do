import React from 'react';
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { setCurrentAction, deleteTodoItem } from '../../store/actions/todolist';
import styles from './Item.module.css';


const Item = props => {

    const dispatch = useDispatch()

    const { content, index } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <span>{content}</span>
            </div>
            <div className={styles.actions}>
                <div className={styles.edit}>
                   <FaPen onClick={() => dispatch(setCurrentAction('edit', index))} />
                </div>
                <div className={styles.delete}>
                   <FaTrash onClick={() => dispatch(deleteTodoItem(index))} />
                </div>
            </div>
        </div>
    )
}

export default Item;