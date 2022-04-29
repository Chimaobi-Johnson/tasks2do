import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Items from './containers/Items/Items';
import { saveDataHandler, fetchData, updateTodoItem, setCurrentAction } from './store/actions/todolist';
import { addTodoItem } from './store/actions/todolist';
import { db } from './firebase-config';
import { useSelector, useDispatch } from 'react-redux';



function App() {
  const dispatch = useDispatch();
  const listItems = useSelector(data => data.todolist.items);
  const currentIndex = useSelector(data => data.todolist.currentIndex);
  const action = useSelector(data => data.todolist.action);
  console.log(currentIndex)
  useEffect(() => {

    const getTodoListItems = async () => {
      // query by items to get data from the items document
      const dataset = await db.collection('todolist').where('__name__', '==' ,'items').get()
      if(!dataset) {
        alert("error retrieving data. check connection settings")
      } else {
        // take items doc and dispatch to redux store
        const data = dataset.docs.map(doc => doc.data());
        console.log(data[0])
        // dispatch first object to redux store (query can only return one object at a time)
        dispatch(fetchData(data[0]));
      }

    }

    getTodoListItems()
  }, [])

  const [ currentText, setCurrentText ] = useState("");
  const changeTextHandler = (e) => {
      setCurrentText(e.target.value);
  }

  const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        if(action === 'editing') {
          dispatch(updateTodoItem(currentText, currentIndex));
        } else {
          dispatch(addTodoItem(currentText));
        }
        dispatch(setCurrentAction('', currentIndex))
        setCurrentText("");
      }
    }

  const updateItem = () => {
      if(action === 'editing') {
        dispatch(updateTodoItem(currentText, currentIndex));
      } else {
        dispatch(addTodoItem(currentText));
      }
      dispatch(setCurrentAction('', currentIndex))
      setCurrentText("");
  }

  useEffect(() => {
    assignTextToInput()
    function assignTextToInput() {
      setCurrentText(listItems[currentIndex])
    }
  }, [currentIndex])

  return (
      <div className="wrapper">
         <div className="container">
            <header>TODO LIST</header>
            <Input 
              currentText={currentText}
              changeTextHandler={changeTextHandler} 
              handleKeyPress={handleKeyPress} 
              updateItem={updateItem} />
            <Items />
          <div className="save">
            <button onClick={() => dispatch(saveDataHandler(listItems))}>Save</button>
          </div>
         </div>
      </div>  
    );
}

export default App;
