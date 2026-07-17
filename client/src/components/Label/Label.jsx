import React from "react";

function Label({ ref, label }) {
  return (
    <label htmlFor={ref} className="input">
      <span className="label-text">{label}</span>
    </label>
  );
}

export default Label;
