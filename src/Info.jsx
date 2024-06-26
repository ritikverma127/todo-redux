import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE } from './Fish'; // Ensure correct path
import "./App.css"; // Import the CSS file

function Info() {
  const dispatch = useDispatch();
  const slice = useSelector((state) => state.user.cart); // Correct state selection

  const deleteData = (item) => {
    // Ensure dispatch happens in an event handler, not during rendering
    dispatch(DELETE(item));
  };

  return (
    <div className="info-container">
      {slice.map((item, index) => (
        <div className="info-item" key={index}>
          {item}
          <button onClick={() => deleteData(item)}>DELETE</button>
        </div>
      ))}
    </div>
  );
}

export default Info;
