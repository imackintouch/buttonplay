import React, { useState } from "react";
import "./styles.css";
// import Button from "./Button";

// where i will create new click color code
export default function App() {
  const [buttonsOnCanvas, setButtonsOnCanvas] = useState([]);
  const button_name = "Add Button";

  function handleAddButtonClick() {
    setButtonsOnCanvas([...buttonsOnCanvas, <button>{button_name}</button>]);
  }

  return (
    <div className="App">
      <button onClick={() => handleAddButtonClick()}>{button_name}</button>
      <div className="canvas">{buttonsOnCanvas}</div>
    </div>
  );
}
