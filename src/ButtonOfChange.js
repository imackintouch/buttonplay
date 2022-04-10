import React from "react";
import "./styles.css";

export default function ButtonOfChange({ button_text }) {
  return (
    <div className="button_of_change">
      <button>{button_text}</button>
    </div>
  );
}
