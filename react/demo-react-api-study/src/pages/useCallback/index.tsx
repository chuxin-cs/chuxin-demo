import { useState, memo, useCallback } from "react";
function UseCallbackPages() {
  return (
    <>
      <Demo1 />
      <Demo2 />
    </>
  );
}

function Demo1() {
  console.log(1);
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>demo1: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}

function Demo2() {
  console.log("demo2");
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("click...", count);
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <h2>demo2: {count}</h2>
      <button onClick={handleClick}>+1</button>
      <Demo3 count={count} handleClick={handleClick} />
    </>
  );
}

const Demo3 = memo(({ handleClick }: any) => {
  console.log("demo3");
  return (
    <>
      <h2>demo1: {1}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
});

export default UseCallbackPages;
