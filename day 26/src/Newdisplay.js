import { useSelector} from "react-redux";


function Newdisplay() {
    
    const count = useSelector((state) => state.counter)

    return (

        <div>
            {count}
        </div>
    )
}

export default Newdisplay;