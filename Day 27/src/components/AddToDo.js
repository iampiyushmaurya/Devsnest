import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";


const AddToDo = () => {


    const [item, setitem] = useState(" ");
    const dispatch = useDispatch();

    return (
        <div className = "AddToDo">
            <input
            type = "text"
             placeholder="input"
             value = {item}
             onChange = { (e) => {
                     setitem(e.target.value) }
             }/>
            <button
            onClick = { () => {
                dispatch(addItem({
                    title: item,
                    done: false,
                }));
                setitem("");
            }}>Add</button>
        </div>
    );
}

export default AddToDo;