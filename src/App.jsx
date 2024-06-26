import React, { useState } from "react";
import Info from "./Info";
import { useDispatch } from "react-redux";
import { ADD } from "./Fish"; // Ensure correct path
import "./App.css"; // Import the CSS file

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  const handleData = (e) => {
    setData(e.target.value);
  };

  const addData = () => {
    if (data.trim() !== "") { // Check if the input is not empty
      dispatch(ADD(data));
      setData(""); // Clear the input field
    }
  };

  return (
    <div className="body">
      <div className="container">
        <h1>Todo Application</h1>
        <input 
          type="text" 
          value={data} 
          onChange={handleData} 
          placeholder="Enter The Data" 
        />
        <button onClick={addData}>ADD</button>
        <Info />
      </div>
    </div>
  );
}

export default App;
