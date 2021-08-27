import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../actions";

const ListToDo = () => {

const dispatch = useDispatch();
const todo = useSelector((state)=>state.todo);

    return (
        <div className = "ListToDo">
            {todo.map((todo, index)=>(
                <div className = "card">
                    <h5 style= {{display: "inline-block"}}>{todo.title}</h5>
                    <button onClick = {() => {
                        dispatch(deleteItem(index));
                    }}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default ListToDo;