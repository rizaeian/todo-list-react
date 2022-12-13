import React, { useState } from "react";

function App() {
  const [inputList, setInputList] = useState("");
  const [listItems, addListItem] = useState([]);

  function hundleChange(event) {
    const newList = event.target.value;
    setInputList(newList);
  }

  function hundleClick() {
    addListItem((prevItems) => {
      return [...prevItems, inputList];
    });

    setInputList("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={hundleChange} type="text" value={inputList} />
        <button onClick={hundleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((toDoList) => (
            <li>{toDoList}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
