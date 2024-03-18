import { useState } from "react";

function useInput(initialState: any) {
  const [value, setValue] = useState(initialState);
  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
}
function YouHua() {
  const name = useInput("");
  const password = useInput("");
  return (
    <>
      {name.value}/{password.value}
      <div>
        <div>
          <label>账号：</label>
          <input type="text" {...name} />
        </div>
        <div>
          <label>密码：</label>
          <input type="text" {...password} />
        </div>
      </div>
    </>
  );
}

function App() {
  // const [name, setName] = useState("");
  // const handleNameChange = (e: any) => {
  //   setName(e.target.value);
  // };

  // const [password, setPassword] = useState("");
  // const handlePasswordChange = (e: any) => {
  //   setPassword(e.target.value);
  // };

  return (
    <>
      <YouHua />
      {/* <div>
        <div>
          <label>账号：</label>
          <input
            type="text"
            value={name}
            onChange={(e) => handleNameChange(e)}
          />
        </div>
        <div>
          <label>密码：</label>
          <input
            type="text"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
          />
        </div>
      </div> */}
    </>
  );
}

export default App;
