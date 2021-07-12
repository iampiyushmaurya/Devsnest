import React from "react";
import "./style.css";
import Box from "./components/Box";

function App(props){

    return (
        <div className="App">
            <h1>Calories Consuption Data</h1>
            <div className="data">
                <Box title = "Strawberry" val="32" />      
                <Box title = "Whole Grain Toast" val="288" />      
                <Box title = "Eggs" val="155" />      
                <Box title = "Salad" val="11" />      
                <Box title = "Mushroom" val="22" />
                <Box title = "Cod" val="84" />
                <Box title = "Chesse" val="72" />

            </div>
        </div>
    )

}

export default App;