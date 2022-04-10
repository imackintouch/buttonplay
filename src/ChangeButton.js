import React from "react";
import "./styles.css";

const list_of_button_texts = [
  "Time For a Cool Change",
  "Changes",
  "Winds Of change",
  "Karma Chameleon",
  "What's Going On",
  "Philadelphia Freedom"
];

export default function ChangeButton({ text_for_change, setTextForChgButton }) {
  const button_name = "Change Button";

  function handleAddButtonClick() {
    let choice;
    console.log("I am the Change Button!");
    // Generate a new value for the button
    choice = Math.floor(Math.random() * list_of_button_texts.length);
    setTextForChgButton(list_of_button_texts[choice]);
    console.log(`My text_for_change is '${text_for_change}'`);
  }

  return (
    <div className="change_button">
      <button onClick={() => handleAddButtonClick()}>{button_name}</button>
    </div>
  );
}
