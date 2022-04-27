import React from 'react';
import styles from './Item.module.css';


const Item = props => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <span>{props.content}</span>
            </div>
            <div className={styles.actions}>
                <div className={styles.edit}>
                    Edit
                </div>
                <div className={styles.delete}>
                    Del
                </div>
            </div>
        </div>
    )
}

export default Item;