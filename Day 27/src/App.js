import './App.css';
import AddToDo from './components/AddToDo';
import ListToDo from './components/ListToDo';


function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddToDo />
      <ListToDo />
    </div>
  );
}

export default App;
