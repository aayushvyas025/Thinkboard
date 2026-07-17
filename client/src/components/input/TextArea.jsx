import React from "react";

function TextArea({ id, placeholder, onChangeHandler, value, style }) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      value={value}
      className={style}
      onChange={onChangeHandler}
    />
  );
}

export default TextArea;
