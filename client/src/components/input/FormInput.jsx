import React from "react";
import Label from "../Label/Label";
import Input from "./Input";

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
      <Input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        style={style}
        onChangeHandler={onChangeHandler}
      />
    </div>
  );
}

export default FormInput;
