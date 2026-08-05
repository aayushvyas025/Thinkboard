function Label({ ref, label }) {
  return (
    <label htmlFor={ref} className="input">
      <span className="label-text font-bold">{label}</span>
    </label>
  );
}

export default Label;
