import React from "react";
import Label from "../Label/Label";
import Input from "./Input";
import TextArea from "./TextArea";

function FormInput({
  labelRef,
  label,
  inputId,
  type,
  placeholder,
  value,
  style,
  onChangeHandler,
}) {
  return (
    <div className="form-control mb-4">
      <Label ref={labelRef} label={label} />
      {labelRef === "title" && (
        <Input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          style={style}
          onChangeHandler={onChangeHandler}
        />
      )}
      {labelRef === "description" && (
        <TextArea
          id={inputId} 
          value={value}
          placeholder={placeholder}
          style={style}
          onChangeHandler={onChangeHandler}
        />
      )}
    </div>
  );
}

export default FormInput;
