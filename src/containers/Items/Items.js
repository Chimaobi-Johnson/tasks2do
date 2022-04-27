import React, { useEffect } from "react";
import Item from "../../components/Item/Item";

import { useSelector } from 'react-redux';


const Items = props => {


    const listItems = useSelector(data => data.items);    
        // items here in order not to complicate app.js 
    return (
        <div>
            {listItems.map(listItem => {
                return <Item key={Math.random() * 1000} content={listItem} />
            })}
        </div>
    )
}

export default Items