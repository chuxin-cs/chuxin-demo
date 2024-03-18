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
  return (
    <>
      <YouHua />
    </>
  );
}

export default App;
