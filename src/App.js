import React, { useState, useEffect } from 'react';
import Input from './components/Input/Input';
import Items from './containers/Items/Items';
import { fetchData, updateTodoItem, setEditMode } from './store/actions/todolist';
import { addTodoItem } from './store/actions/todolist';
import { db } from './firebase-config';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';



function App() {
  const dispatch = useDispatch();
  const listItems = useSelector(data => data.todolist.items);
  const currentIndex = useSelector(data => data.todolist.currentIndex);
  const editing = useSelector(data => data.todolist.editing);
  

  // FETCHING DATA ON PAGE LOAD
  useEffect(() => {

    const getTodoListItems = async () => {
      // query by items to get data from the items document
      const dataset = await db.collection('todolist').where('__name__', '==' ,'items').get()
      if(!dataset) {
        alert("error retrieving data. check connection settings")
      } else {
        const data = dataset.docs.map(doc => doc.data());
        // dispatch first object to redux store (query can only return one object at a time)
        dispatch(fetchData(data[0]));
      }

    }

    getTodoListItems()
  }, [dispatch])

  // INPUT CHANGE, EDIT AND UPDATE FUNCTIONALITY

  const [ currentText, setCurrentText ] = useState("");

  const changeTextHandler = (e) => {
      setCurrentText(e.target.value);
  }

  const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        if(!currentText) return dispatch(setEditMode('', currentIndex))
        if(editing) {
          dispatch(updateTodoItem(currentText, currentIndex));
        } else {
          dispatch(addTodoItem(currentText));
        }
        dispatch(setEditMode('', currentIndex))
        setCurrentText("");
      }
    }

  const updateItem = () => {
      if(!currentText) return dispatch(setEditMode('', currentIndex))
      if(editing) {
        dispatch(updateTodoItem(currentText, currentIndex));
      } else {
        dispatch(addTodoItem(currentText));
      }
      dispatch(setEditMode('', currentIndex))
      setCurrentText("");
  }
  
  // ADDING TEXT TO INPUT VALUE WHEN EDIT BUTTON IS CLICKED
  useEffect(() => {
    assignTextToInput()
    function assignTextToInput() {
      if(!editing) return // makes sure input is cleared when the user is done with editing an item
      setCurrentText(listItems[currentIndex])
    }
  }, [currentIndex, editing, listItems])


  // SAVING DATA
  const saveDataHandler = (data) => {
    db.collection('todolist').doc('items').set({items: data}).then(res => {
      alert("Data saved successfully")
    })
  }

  return (
      <div className="wrapper">
         <div className="container">
            <header>TODO LIST</header>
            <Input 
              currentText={currentText}
              changeTextHandler={changeTextHandler} 
              handleKeyPress={handleKeyPress} 
              updateItem={updateItem} 
              editing={editing}
              />
            <Items />

          <div className="save">
            <button onClick={() => saveDataHandler(listItems)}>Save</button>
          </div>

         </div>
      </div>  
    );
}

export default App;
