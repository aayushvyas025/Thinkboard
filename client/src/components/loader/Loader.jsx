import React from "react";

function Loader({ style, text, children }) {
  return (
    <div className={style}>
      {text} {children}
    </div>
  );
}

export default Loader;
