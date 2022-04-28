import React, { useEffect } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Items from './containers/Items/Items';
import { saveDataHandler } from './store/actions/todolist';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";


function App() {
  const dispatch = useDispatch();
  const itemsList = collection(db, 'items')
  const listItems = useSelector(data => data.items); 
  useEffect(() => {

    const getTodoListItems = async () => {
      const data = await getDocs(itemsList);
      console.log(data)
    }

    getTodoListItems()
  }, [])

  return (
      <div className="wrapper">
         <div className="container">
            <header>TODO LIST</header>
            <Input />
            <Items />
          <div className="save">
            <button onClick={() => dispatch(saveDataHandler(listItems))}>Save</button>
          </div>
         </div>
      </div>  
    );
}

export default App;
