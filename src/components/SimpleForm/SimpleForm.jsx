const SimpleForm = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
