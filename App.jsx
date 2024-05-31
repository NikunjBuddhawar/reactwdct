import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Styles from "./Mycomponent.module.css";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setText(value);
  }

  function handleClick(event) {
    event.preventDefault();
    setItems((prevValue) => {
      return [...prevValue, text];
    });
    setText("");
  }

  function update(index) {
    setItems((prevValue) => {
      return prevValue.filter((item, id) => id !== index);
    });
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.middleContent}>
        <h1 className={Styles.zero}>To-Do List</h1>
        <form>
          <CreateArea
            text={text}
            handleChange={handleChange}
            handleClick={handleClick}
          />
        </form>
        <ul>
          {items.map((item, index) => (
            <div className={Styles.three} key={index}>
              <li className={Styles.two}>
                {item}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    update(index);
                  }}
                >
                  delete
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

