// import SimpleForm from "./components/SimpleForm/SimpleForm";
import "./App.css";
import HookForm from "./components/HookForm";
import ReusableForm from "./components/ReusableForm";
// import RefForm from "./components/RefForm/RefForm";
// import SimpleStateForm from "./components/SimpleStateForm/SimpleStateForm";
function App() {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <SimpleStateForm></SimpleStateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm handleSubmit={handleSubmit} btnText="sign up">
        <div>
          <h1>Sign up</h1>
          <h2>Please Sign up for the first time</h2>
        </div>
      </ReusableForm>
      <ReusableForm handleSubmit={handleSubmit} btnText="Update">
        <div>
          <h1>Update Profile</h1>
          <h2>Always keep Updated Your Profile</h2>
        </div>
      </ReusableForm>
    </>
  );
}

export default App;
