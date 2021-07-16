import React, { useState } from "react";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
          console.log(count);
        }}
      >
        {count}
      </button>
    </div>
  );
}

export default App;
