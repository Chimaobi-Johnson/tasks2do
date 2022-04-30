import React from "react";
import Item from "../../components/Item/Item";

import { useSelector } from 'react-redux';


const Items = props => {


    const listItems = useSelector(data => data.todolist.items);

    // items here in order not to complicate app.js 
    return (
        <div>
            {listItems.map((listItem, index) => {
                return <Item key={Math.random() * 1000} content={listItem} index={index} />
            })}
        </div>
    )
}

export default Items