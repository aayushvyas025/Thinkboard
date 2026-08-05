function Form({ children, onSubmitHandler }) {
  return <form onSubmit={onSubmitHandler}>{children}</form>;
}

export default Form;
