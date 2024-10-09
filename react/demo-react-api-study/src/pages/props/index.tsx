import { useState } from "react";

function PropsPages() {
  let [user, setUser] = useState({ name: "初心", age: 27 });

  const updateSetUser = () => {};

  return (
    <>
      <div>===================PropsPages======================</div>
      <Demo1 header={<p> 我现在是header </p>}>我现在是默认插槽</Demo1>
      <Demo2 {...user} setUser={setUser} />
    </>
  );
}

function Demo1(props: any) {
  console.log(props, "props");
  return (
    <>
      <h2>demo1</h2>
      <div>{props.header}</div>
      <div>{props.children}</div>
    </>
  );
}

function Demo2(props: any) {
  console.log(props);
  return (
    <>
      <h2>demo2</h2>
    </>
  );
}

export default PropsPages;
