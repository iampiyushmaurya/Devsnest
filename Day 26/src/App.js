import './App.css';
import {updateName, updateEmail} from "./actions/index";
import {useDispatch, useSelector } from "react-redux";

function App() {
  const Name = useSelector((state) => state.Name);
  const Email = useSelector((state) => state.Email); 

  const dispatch = useDispatch();

  return (
    <div className="App">
     <h1>Input</h1>
     <input placeholder="Name" onChange = {
       (e) =>{ dispatch(updateName(e.target.value)); } 
     }></input>
     <input placeholder="Email" onChange = {
       (e) =>{ dispatch(updateEmail(e.target.value)); } 
     }></input>
     <div className = "output" >
     <h1>Data</h1> 
     <div className ="ans">
     <h1>UserName:   <span>{Name} </span> </h1>
     <h1>Email:      <span>{Email}</span> </h1>
     </div>
     </div>
    </div>
  );
}

export default App;
