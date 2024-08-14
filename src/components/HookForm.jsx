import React from "react";
import useInputState from "../hooks/useInputState";

const HookForm = () => {
  const emailState = useInputState("sajjad@gmail.com");
  const nameState = useInputState("");
  const handleSubmitForm = (e) => {
    console.log("form data", emailState.value);
    console.log("name", nameState.value);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input {...nameState} type="text" name="name" />
        <br />
        <input {...emailState} type="email" name="email" />
        <br />
        {/* <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          id=""
        /> */}
        <br />
        <input type="submit" value="submit" />
      </form>
      {/* {error && <p>{error}</p>} */}
    </div>
  );
};

export default HookForm;
