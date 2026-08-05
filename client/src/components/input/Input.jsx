function Input({ id, type, value, onChangeHandler, placeholder, style }) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      className={style}
    />
  );
}

export default Input;
