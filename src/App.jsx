import React, { useState } from "react";
import Info from "./Info";
import { useDispatch } from "react-redux";
import { ADD } from "./Fish"; 
import "./App.css"; 
function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  const handleData = (e) => {
    setData(e.target.value);
  };

  const addData = () => {
    if (data.trim() !== "") { 
      dispatch(ADD(data));
      setData(""); 
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
