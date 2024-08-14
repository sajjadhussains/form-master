const ReusableForm = ({ handleSubmit, btnText, children }) => {
  const handleSubmitLocally = (e) => {
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const data = {
      name,
      email,
      pass,
    };
    handleSubmit(data);
    e.preventDefault();
  };
  return (
    <div>
      {children}
      <form onSubmit={handleSubmitLocally}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value={btnText} />
      </form>
    </div>
  );
};

export default ReusableForm;
