import { useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input ref={nameRef} type="text" name="name" />
        <br />
        <input ref={emailRef} type="email" name="email" />
        <br />
        <input ref={passRef} type="password" name="password" id="" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default RefForm;
