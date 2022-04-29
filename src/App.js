import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Items from './containers/Items/Items';
import { saveDataHandler, fetchData } from './store/actions/todolist';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";


function App() {
  const dispatch = useDispatch();
  const itemsList = collection(db, 'todolist')
  const listItems = useSelector(data => data.items);
  const [info , setInfo] = useState([]); 
  useEffect(() => {

    const getTodoListItems = async () => {

      const dataset = await db.collection('todolist').get();
      if(!dataset) {
        alert("error retrieving data. check connection settings")
      } else {
        // take first document and dispatch to redux store
        const data = dataset.docs.map(doc => doc.data());
        console.log(data[0])
        dispatch(fetchData(data[0]));
      }

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
