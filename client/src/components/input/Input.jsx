import React from "react";

function Input({ id, type, value, onClickHandler, placeholder, style }) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onClick={onClickHandler}
      placeholder={placeholder}
      className={style}
    />
  );
}

export default Input;
