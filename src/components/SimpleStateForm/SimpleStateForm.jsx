import { useState } from "react";

const SimpleStateForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (password.length < 5) {
      setError("Password must be at least more than 4 characters");
    } else {
      console.log(name, email, password);
    }
  };
  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input onChange={handleNameChange} type="text" name="name" />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          id=""
        />
        <br />
        <input type="submit" value="submit" />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SimpleStateForm;
