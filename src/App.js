import React, { useState } from "react";
import "./styles.css";
import ChangeButton from "./ChangeButton";
import ButtonOfChange from "./ButtonOfChange";

export default function App() {
  const [textForChgButton, setTextForChgButton] = useState("Button Of Change");

  return (
    <div className="App">
      <ChangeButton
        text_for_change={textForChgButton}
        setTextForChgButton={setTextForChgButton}
      ></ChangeButton>
      <ButtonOfChange button_text={textForChgButton}></ButtonOfChange>
    </div>
  );
}
