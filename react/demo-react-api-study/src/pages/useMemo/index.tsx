import { useState, useEffect, useMemo } from "react";
function UseMemoPages() {
  return (
    <>
      <Demo1 />
      <Demo2 />
    </>
  );
}

const Demo1 = () => {
  console.log("demo1 贝执行了~");
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  console.log(count);
  const data = useMemo(() => {
    console.log("useMemo 执行了~");
    return count;
  }, [count]);

  return (
    <>
      <h2>demo1-count:{data}</h2>
      <button onClick={() => setCount(count + 1)}> +1 </button>

      <h2>demo1-count1:{count1}</h2>
      <button onClick={() => setCount1(count1 + 1)}> +1 </button>
    </>
  );
};
const Demo2 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((result: any) => {
      setData(result);
    });
  }, []);

  const computed = useMemo(() => {
    if (data == null) return null;
    return data;
  }, [data]);

  return (
    <>
      <div>demo2:{computed}</div>
      <button
        onClick={() =>
          fetchData().then((result: any) => {
            setData(result);
          })
        }
      >
        {" "}
        set data
      </button>
    </>
  );
};

async function fetchData() {
  // 模拟异步数据获取
  return new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), 1000)
  );
}

export default UseMemoPages;
