import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import Items from './containers/Items/Items';

function App() {
  return (
      <div className="wrapper">
         <div className="container">
            <header>TODO LIST</header>
            <Input />
            <Items />
          <div className="save">
            <button>Save</button>
          </div>
         </div>
      </div>  
    );
}

export default App;
