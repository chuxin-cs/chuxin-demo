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
  console.log("demo1");
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);

  const onChange = useCallback(
    (e: any) => {
      setCount(e.target.value);
    },
    [count]
  );
  const onChange1 = useCallback(
    (e: any) => {
      setCount1(e.target.value);
    },
    [count1]
  );

  return (
    <>
      <h2>demo1: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Demo4 count={count} setCount={onChange} />
      <Demo5 count={count1} setCount={onChange1} />
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

const Demo4 = memo(({ count, setCount }: any) => {
  console.log(":demo4");
  return (
    <>
      <div>{count}</div>
      <input type={count} onChange={setCount} />
    </>
  );
});

const Demo5 = memo(({ count, setCount }: any) => {
  console.log(":demo5");
  return (
    <>
      <div>{count}</div>
      <input type={count} onChange={setCount} />
    </>
  );
});

export default UseCallbackPages;
